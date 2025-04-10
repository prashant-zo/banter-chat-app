import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { getUserForSidebar } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUserForSidebar);

export default router;