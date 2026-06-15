const express = require('express');
const router = express.Router();
const OpenAI = require("openai");

// تنظیم کلاینت برای OpenRouter
const openrouterClient = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

router.post('/', async (req, res) => {
  try {
    const { userMessage } = req.body;

    if (!userMessage) {
      return res.status(400).json({
        success: false,
        error: "پیام نمی‌تواند خالی باشد"
      });
    }

    console.log("📨 Received message:", userMessage);

    const completion = await openrouterClient.chat.completions.create({
      model: "nvidia/nemotron-3-ultra-550b-a55b:free",
      messages: [{ role: "user", content: userMessage }],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const assistantMessage = completion.choices[0]?.message?.content || "پاسخی دریافت نشد";

    console.log("🤖 Assistant reply:", assistantMessage);

    res.json({
      success: true,
      reply: assistantMessage
    });

  } catch (error) {
    console.error("❌ OpenRouter API Error:", error);
    res.status(500).json({
      success: false,
      error: error.message || "مشکلی در پردازش درخواست وجود دارد."
    });
  }
});

module.exports = router;
