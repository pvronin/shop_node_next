const OpenAI = require("openai");

const apiKey = process.env.DEEPSEEK_API_KEY;

if (!apiKey) {
  throw new Error("Missing DEEPSEEK_API_KEY environment variable");
}

const deepseekClient = new OpenAI({
  apiKey: apiKey,
  baseURL: "https://openrouter.ai/api/v1",
});

module.exports = deepseekClient;
