import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function analyzeCropImage(base64Image: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          parts: [
            { text: `Analyze this crop leaf image for pests, diseases, or nutrient deficiencies. 
            Provide a structured response in JSON format with:
            - diagnosis: string (the identified issue)
            - confidence: number (0 to 1)
            - description: string (brief explanation)
            - recommendations: string[] (organic treatment steps)
            - threatLevel: 'low' | 'medium' | 'high'` },
            {
              inlineData: {
                data: base64Image.split(",")[1],
                mimeType: "image/jpeg",
              },
            },
          ],
        },
      ],
    });
    
    const text = response.text;
    if (!text) return null;
    
    // Extract JSON from potential markdown blocks
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    return jsonMatch ? JSON.parse(jsonMatch[0]) : null;
  } catch (error) {
    console.error("Vision AI Error:", error);
    return null;
  }
}

export async function getVoiceAssistantResponse(query: string, language: string = "English") {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are Agri-Shakti AI, a helpful agricultural assistant for farmers. 
      The user is asking in ${language}: "${query}".
      Provide a helpful, concise, and actionable response in ${language}. 
      If the query is about weather, market prices, or crop health, be as specific as possible based on general knowledge.`,
    });
    
    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Voice Hub Error:", error);
    return "I'm sorry, I couldn't process that request right now.";
  }
}
