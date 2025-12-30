import { openai } from "../../config/openai";

export async function generateAI(prompt: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-5-nano",
    messages: [
      {
        role: "system",
        content: "You are a professional legal assistant.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.4,
  });

  return response.choices[0].message.content;
}
