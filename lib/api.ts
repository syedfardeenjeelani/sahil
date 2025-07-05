// lib/api.ts
import { InferenceClient } from "@huggingface/inference";

const HF_TOKEN = process.env.HF_TOKEN!;
const client = new InferenceClient(HF_TOKEN);

/**
 * Hugging Face chat completion (Mixtral)
 */
export const askHuggingFace = async (query: string) => {
  try {
    const chatCompletion = await client.chatCompletion({
      provider: "together",
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        {
          role: "user",
          content: query,
        },
      ],
    });

    return chatCompletion.choices[0].message.content;
  } catch (error) {
    console.error("HuggingFace API error:", error);
    throw new Error("Failed to get Hugging Face response");
  }
};

/**
 * Google Search API via RapidAPI
 */
export const searchApi = async (query: string) => {
  const url = `https://google-search74.p.rapidapi.com/?query=${encodeURIComponent(query)}&limit=10&related_keywords=true`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY!,
      "x-rapidapi-host": "google-search74.p.rapidapi.com"
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Search API error:", error);
    throw new Error("Failed to fetch search results");
  }
};