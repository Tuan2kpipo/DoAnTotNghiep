import express from "express";
import * as notifitionController from "../controllers/notifition";
import verifyToken from "../middlewares/verifyToken";

const router = express.Router();

router.get("/all", notifitionController.getNotifition);

export default router;
