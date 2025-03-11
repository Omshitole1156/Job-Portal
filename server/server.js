import * as Sentry from "@sentry/node"
import express from 'express'
import './config/instrument.js'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import { clerkwebhooks } from "./controllers/webhooks.js"
import companyRoutes from './routes/companyRoutes.js'
import connectCloudinary from "./config/cloudinary.js"
import jobRoutes from "./routes/jobRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import {clerkMiddleware} from '@clerk/express'

// Intialize Express
const app = express()

// connect to Database

await connectDB()
await connectCloudinary()


// Middlewares

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

// Routes

app.get('/',(req,res)=>res.send("API Working"))
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });
app.post('/webhooks',clerkwebhooks)
app.use('/api/company',companyRoutes)
app.use('/api/jobs',jobRoutes)
app.use('/api/users',userRoutes)

// Port
const PORT = process.env.PORT || 5002
Sentry.setupExpressErrorHandler(app);

app.listen(PORT,()=>{
    console.log(`Server is running on port${PORT}`);
    
})