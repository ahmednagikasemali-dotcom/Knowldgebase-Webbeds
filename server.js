import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

// ضع مفتاح الـ OpenAI API الخاص بك هنا
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// نقطة لاستقبال الأسئلة من الصفحة
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "أنت مساعد ذكي يجيب على أسئلة WebBeds Knowledge Base بالعربية والإنجليزية." },
        { role: "user", content: message }
      ],
      max_tokens: 300,
      temperature: 0.7
    });

    const answer = response.choices[0].message.content;
    res.json({ answer });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
npm init -y
npm install express cors openai
export OPENAI_API_KEY="مفتاحك_هنا"
node server.js

