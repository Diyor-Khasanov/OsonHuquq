"use client";

import { useState } from "react";
import Button from "@/app/components/ui/Button";
import { generateAI } from "@/app/services/ai.service";

export default function GeneratePage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    const res = await generateAI(text);
    setResult(res.data.result);
    setLoading(false);
  };

  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10">
      <div className="bg-white rounded-3xl shadow p-8">
        <h2 className="text-2xl font-bold mb-6">
          Yuridik Hujjat yoki Shartnoma yarating
        </h2>

        <textarea
          className="w-full min-h-55 p-6 rounded-2xl border-2 border-indigo-400"
          placeholder="Masalan: ijara shartnomasi yozib ber"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button onClick={submit} className="mt-6 w-full bg-blue-600 p-2 font-semibold text-white rounded-2xl cursor-pointer">
          {loading ? "Generating..." : "Generate"}
        </Button>
      </div>

      <div className="bg-white rounded-3xl shadow p-8">
        <h2 className="text-2xl font-bold mb-6">AI Javobi</h2>

        {result ? (
          <pre className="whitespace-pre-wrap text-sm">
            {result}
          </pre>
        ) : (
          <p className="text-slate-400">
            AI javobi shu yerda ko`rinadi
          </p>
        )}
      </div>
    </div>
  );
}
