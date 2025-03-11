import express from 'express'
import { ChangeJobApplicationStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'


const router = express.Router()

// Register a company

    router.post('/register',upload.single('image'),registerCompany)

// Company login

router.post('/login',loginCompany)

// Get Company data
router.get('/company',protectCompany, getCompanyData)

// Post a job
router.post('/post-job',protectCompany, postJob)

// Get applicants data of company
router.get('/applicants',protectCompany, getCompanyJobApplicants)

// Get Company job list
router.get('/list-jobs',protectCompany, getCompanyPostedJobs)

// Change Application status
router.post('/change-status',protectCompany, ChangeJobApplicationStatus)

// change applicants visiblity
router.post('/change-visiblity',protectCompany, changeVisibility)


export default router