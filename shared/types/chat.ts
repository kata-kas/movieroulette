export interface ChatMessage {
  id: string
  sender: 'user' | 'partner' | 'system'
  text: string
  timestamp: Date
  metadata?: Record<string, any>
}
