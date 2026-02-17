
import { GoogleGenAI } from "@google/genai";

// Create a new GoogleGenAI instance inside each call to ensure the latest process.env.API_KEY is utilized.
export const getBusinessInsights = async (data: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert business consultant for small retail shops. 
      Analyze the following business data and provide 3 actionable insights, 1 marketing tip, and a brief 1-sentence summary of overall health.
      Format the response as clear bullet points.
      Data: ${data}`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "Could not generate insights at this time. Please check your connectivity or API configuration.";
  }
};

export const generateMarketingDraft = async (productName: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Draft a short, catchy SMS marketing message for a product called "${productName}". Target local retail customers in Bangladesh. Use a friendly tone.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "Error generating draft.";
  }
};
