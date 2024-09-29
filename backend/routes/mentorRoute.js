import express from 'express';
import { loginMentor, appointmentsMentor, appointmentCancel, mentorList, changeAvailablity, appointmentComplete, mentorDashboard, mentorProfile, updateMentorProfile } from '../controllers/mentorController.js';
import authMentor from '../middleware/authMentor.js';
const mentorRouter = express.Router();

mentorRouter.post("/login", loginMentor)
mentorRouter.post("/cancel-appointment", authMentor, appointmentCancel)
mentorRouter.get("/appointments", authMentor, appointmentsMentor)
mentorRouter.get("/list", mentorList)
mentorRouter.post("/change-availability", authMentor, changeAvailablity)
mentorRouter.post("/complete-appointment", authMentor, appointmentComplete)
mentorRouter.get("/dashboard", authMentor, mentorDashboard)
mentorRouter.get("/profile", authMentor, mentorProfile)
mentorRouter.post("/update-profile", authMentor, updateMentorProfile)

export default mentorRouter;