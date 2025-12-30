import { Router } from "express";
import { generate, simplify, risk } from "./ai.controller";

const router = Router();

router.post("/generate", generate);
router.post("/simplify", simplify);
router.post("/risk", risk);

export default router;
