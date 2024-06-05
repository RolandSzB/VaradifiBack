import { Router } from "express";

import {
  getEvent,
  addNewEvent,
  deleteEvent,
} from "../controllers/event.controller.js";

const router = Router();

router.get("/", getEvent);

router.post("/", addNewEvent);

router.delete("/", deleteEvent);

export default router;
