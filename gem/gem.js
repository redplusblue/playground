const { GoogleGenerativeAI } = require("@google/generative-ai");
// Get api key from .env file
require("dotenv").config();

const prompt = require("prompt-sync")();

const API_KEY = process.env.API_KEY;

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run() {
  const result = await model.generateContent("Hi Gem");
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
