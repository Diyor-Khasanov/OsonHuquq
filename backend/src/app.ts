import express from "express";
import cors from "cors";
import authRoutes from "./modules/auth/auth.routes";
import documentRoutes from "./modules/document/document.routes";
import aiRoutes from "./modules/ai/ai.routes";

import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(cors({
  origin: "http://localhost:3000", // frontend URL
  credentials: true,
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/document", documentRoutes);
app.use("/api/ai", aiRoutes);

app.use(errorMiddleware);

export default app;
