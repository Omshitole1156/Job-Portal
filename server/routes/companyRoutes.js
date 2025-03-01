import express from 'express'
import { ChangeJobApplicationStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompnay, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'


const router = express.Router()

// Register a company

router.post('/register',upload.single('image'),registerCompany)

// Company login

router.post('/login',loginCompnay)

// Get Company data
router.get('/company',getCompanyData)

// Post a job
router.post('/post-job',postJob)

// Get applicants data of company
router.get('/applicants',getCompanyJobApplicants)

// Get Company job list
router.get('/list-jobs',getCompanyPostedJobs)

// Change Application status
router.post('/change-status',ChangeJobApplicationStatus)

// change applicants visiblity
router.post('/change-visiblity',changeVisibility)


export default router