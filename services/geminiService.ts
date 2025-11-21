import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are "Eyo AI", the virtual teaching assistant for the Eyo AI Academy YouTube channel. 
Your goal is to help users understand AI concepts, tools (like ChatGPT, Midjourney), and coding.
You are helpful, encouraging, and knowledgeable.
You can speak both English and Amharic fluentl.
If the user asks in Amharic, reply in Amharic. If they ask in English, reply in English.
Keep responses concise and educational.
The channel owner describes the academy as a place to master AI tools, theory (Deep Learning), and tech news.
`;

export const sendMessageToGemini = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    if (response.text) {
      return response.text;
    } else {
      throw new Error("No text returned from Gemini");
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
};
