import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { products } from "@/utils/products";

export async function POST(request: NextRequest) {
  // Server-side environment variables don't need NEXT_PUBLIC prefix
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  try {
    const { query } = await request.json();
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

    const chat = ai.chats.create({
      model: "gemini-2.0-flash",
      config: {
        systemInstruction: `You are the Arasaka Parts Assistant, an AI specialized in recommending precise hardware and electronic components.
    
    Your responsibilities:
    1. Analyze user queries to understand their technical requirements
    2. Recommend specific parts from the Arasaka database that match those requirements
    3. Explain why each recommended part is suitable for their needs
    4. Suggest compatible alternatives when appropriate
    5. Provide technical specifications in a clear, concise format
    
    IMPORTANT: You have a built-in memory mechanism. You must remember all products you recommend to users during the conversation.
    If they ask questions about previously recommended products (e.g., price comparisons, total costs, compatibility), you should:
    1. Recall all products you previously recommended in this conversation
    2. Answer their question precisely based on those past recommendations
    3. Calculate totals or perform comparisons when requested
    
    For every response, you must:
    1. Provide a helpful message addressing the user's query
    2. For new product inquiries: recommend 1-3 products that best match their needs
    3. For questions about previous recommendations: answer directly using your memory of recommended products
    4. Include specific reasons why each product is recommended
    
    You must ALWAYS return your response as a valid JSON object with this exact structure:
    {
      "message": "Your helpful response to the user",
      "suggestedProducts": [
        {
          "id": "product-id",
          "name": "Product Name",
          "brand": "Brand Name",
          "price": 999.99,
          "description": "Brief product description",
          "recommendationReason": "Specific reason this product matches their needs"
        },
        ...additional products if appropriate
      ]
    }
    
    For responses where you're not recommending new products (e.g., answering questions about past recommendations),
    you can return an empty array for suggestedProducts: []`,
        temperature: 0.2,
        tools: [
          {
            googleSearch: {},
          },
        ],
      },
    });

    const result = await chat.sendMessage({
      message: `
      Here is the product database:
      ${JSON.stringify(products)}
      
      User query: "${query}"
      
      Analyze the query and respond appropriately.
      Return your response in the required JSON format.
    `,
    });

    const responseText = result.text;
    if (!responseText) {
      throw new Error("Response text is undefined");
    }

    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Could not extract JSON from response");
    }

    const parsedResponse = JSON.parse(jsonMatch[0]);
    return NextResponse.json(parsedResponse);
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      {
        message:
          "I apologize, but I encountered an error processing your request. Please try again.",
        suggestedProducts: [],
      },
      { status: 500 }
    );
  }
}
