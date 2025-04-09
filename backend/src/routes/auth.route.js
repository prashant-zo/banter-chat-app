import express from "express";
import { checkAuth, Logout, Signin, Signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/signin", Signin);
router.post("/logout", Logout);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);



export default router;