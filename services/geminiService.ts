import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 
// Note: In a real deployment, ensure the API key is handled securely. 
// For this demo, we assume it's available in the environment.

const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are 'GhostShell', a specialized cybersecurity assistant for the CyberForge platform.
Your persona is technical, concise, and helpful. You speak like a seasoned security researcher.
Rules:
1. Always prioritize ethical hacking and legal security research.
2. If asked about illegal activities (hacking without permission), refuse and explain the importance of authorization.
3. Keep answers relatively short, suitable for a terminal interface.
4. Use technical terminology but explain complex concepts if asked.
5. Format code snippets clearly.
`;

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], message: string): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
      history: history
    });

    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Connection interrupted. No data received.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: Uplink failed. Check console or API credentials.";
  }
};