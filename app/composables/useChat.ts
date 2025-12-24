import type { ChatMessage } from '#shared/types/chat'

export const useChat = () => {
  const messages = useState<ChatMessage[]>('chatMessages', () => [])
  const isTyping = useState<boolean>('isTyping', () => false)

  const addMessage = (message: ChatMessage) => {
    messages.value.push(message)
  }

  const addSystemMessage = (text: string) => {
    const message: ChatMessage = {
      id: Date.now().toString(),
      sender: 'system',
      text,
      timestamp: new Date(),
    }
    addMessage(message)
  }

  const addUserMessage = (text: string) => {
    const message: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date(),
    }
    addMessage(message)
  }

  const addPartnerMessage = (text: string) => {
    const message: ChatMessage = {
      id: (Date.now() + 1).toString(),
      sender: 'partner',
      text,
      timestamp: new Date(),
    }
    addMessage(message)
  }

  const setTyping = (typing: boolean) => {
    isTyping.value = typing
  }

  const clearMessages = () => {
    messages.value = []
    isTyping.value = false
  }

  const getConversationHistory = (): string => {
    return messages.value
      .map(m => `${m.sender}: ${m.text}`)
      .join('\n')
  }

  return {
    messages,
    isTyping,
    addMessage,
    addSystemMessage,
    addUserMessage,
    addPartnerMessage,
    setTyping,
    clearMessages,
    getConversationHistory,
  }
}
