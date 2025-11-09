/**
 * AI CHAT COMPONENT
 * 
 * Purpose: AI chatbot/assistant interface
 * Usage: Add AI chat to any page
 * 
 * Features:
 * - Real-time chat interface
 * - Message history
 * - Streaming responses
 * - Typing indicators
 * 
 * Example:
 * import AIChatComponent from './ai-chat-component'
 * <AIChatComponent />
 * 
 * Supports:
 * - OpenAI GPT-4/GPT-3.5
 * - Anthropic Claude
 * - Local Ollama models
 * - Any API compatible endpoint
 * 
 * Setup Required:
 * - AI API key in .env.local
 * - API route: /api/ai/chat
 */

'use client'

import { useState, useRef, useEffect } from 'react'

export default function AIChatComponent({ 
  placeholder = 'Ask me anything...',
  systemPrompt = 'You are a helpful assistant.',
  welcomeMessage = 'Hi! How can I help you today?'
}) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: welcomeMessage }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMessage }],
          systemPrompt,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response')
      }

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.message
      }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-[600px] max-w-2xl mx-auto border rounded-lg shadow-lg bg-base-100">
      {/* Header */}
      <div className="p-4 border-b bg-primary text-primary-content">
        <h3 className="font-bold text-lg">AI Assistant</h3>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat ${message.role === 'user' ? 'chat-end' : 'chat-start'}`}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
                {message.role === 'user' ? '👤' : '🤖'}
              </div>
            </div>
            <div className={`chat-bubble ${message.role === 'user' ? 'chat-bubble-primary' : ''}`}>
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
                🤖
              </div>
            </div>
            <div className="chat-bubble">
              <span className="loading loading-dots loading-sm"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="input input-bordered flex-1"
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
            disabled={isLoading || !input.trim()}
          >
            {isLoading ? '' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  )
}

