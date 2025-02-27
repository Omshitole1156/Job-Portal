// import { mongo } from 'mongoose'
import mongoose from 'mongoose'

// Function to connect to the mongodb database


const connectDB = async ()=>{
    mongoose.connection.on('connected',()=>console.log('Database Connected'))
    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
}

export default connectDB;