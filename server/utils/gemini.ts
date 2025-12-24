import { GoogleGenerativeAI } from '@google/generative-ai'

let genAI: GoogleGenerativeAI | null = null

export const getGeminiClient = () => {
  if (!genAI) {
    const config = useRuntimeConfig()
    const apiKey = config.geminiApiKey

    if (!apiKey || apiKey === 'your_gemini_api_key_here') {
      throw new Error('GEMINI_API_KEY is not configured. Please set NUXT_GEMINI_API_KEY in your .env file')
    }

    genAI = new GoogleGenerativeAI(apiKey)
  }
  return genAI
}

export const getGenerativeModel = (modelName: string = 'gemini-pro') => {
  const client = getGeminiClient()
  return client.getGenerativeModel({ model: modelName })
}
