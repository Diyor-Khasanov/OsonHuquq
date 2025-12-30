import { Request, Response } from "express";
import { generateAI } from "./ai.service";

export const generate = async (req: Request, res: Response) => {
  const { prompt } = req.body;
  const result = await generateAI(
    `Generate a legal document:\n${prompt}`
  );
  res.json({ result });
};

export const simplify = async (req: Request, res: Response) => {
  const { text } = req.body;
  const result = await generateAI(
    `Simplify this legal text into plain language:\n${text}`
  );
  res.json({ result });
};

export const risk = async (req: Request, res: Response) => {
  const { text } = req.body;
  const result = await generateAI(
    `Analyze this legal document and list possible risks:\n${text}`
  );
  res.json({ result });
};
