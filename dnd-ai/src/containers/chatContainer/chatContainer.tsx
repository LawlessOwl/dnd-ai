import { useState } from "react"
import ChatWindow from "../../components/chatWindow/chatWindow.tsx"

const ChatContainer = () => {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setInput(e.target.value)
  }

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, input]);
    setInput("");
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  }

  return (
    <ChatWindow
      messages={messages}
      inputValue={input}
      onInputChange={handleInputChange}
      onSend={handleSend}
      onKeyDown={handleKeyDown}
    />
  )
}

export default ChatContainer
