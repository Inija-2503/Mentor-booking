import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addMentor, allMentors, adminDashboard } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/mentorController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-mentor", authAdmin, upload.single('image'), addMentor)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-mentors", authAdmin, allMentors)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

export default adminRouter;