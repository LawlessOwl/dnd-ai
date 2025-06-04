import type { MessageType } from "@/types/message"
import { useState } from "react"
import ChatWindow from "../../components/chatWindow/chatWindow"

const ChatContainer = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: "1",
      text: "Вы просыпаетесь в своей комнате. Вы слышите шум в коридоре.",
      userName: "Dungeon Master",
      isCurrentUser: false,
      timeStamp: new Date()
    }
  ])
  const [input, setInput] = useState("")
  const [currentUser] = useState({
    userName: "Lawless",
    userAvatar: "https://sun9-53.userapi.com/impg/a-0CGiyLEbU9vWeSSQZ1IGTuqhvFPh1PibQH7A/Osg2TG5XfKA.jpg?size=564x386&quality=96&sign=d0a4f56026bc51408ada97e7fedbb915&type=album"
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setInput(e.target.value)
  }

  const generateMessageId = (): string => {
    if (typeof crypto !== "undefined") {
      return crypto.randomUUID()
    }

    return Date.now().toString() + Math.random().toString(36).substring(2, 9)
  }

  const handleSend = () => {
    if (input.trim() === "") return

    const userMessage: MessageType = {
      id: generateMessageId(),
      text: input.trim(),
      userName: currentUser.userName,
      userAvatar: currentUser.userAvatar,
      isCurrentUser: true,
      timeStamp: new Date()
    }

    setMessages(prevMessages => [...prevMessages, userMessage])
    setInput("")

    setTimeout(() => {
      const dmMessage: MessageType = {
        id: generateMessageId(),
        text: generateDMMessage(input.trim()),
        userName: "Dungeon Master",
        isCurrentUser: false,
        timeStamp: new Date()
      }
      setMessages(prevMessages => [...prevMessages, dmMessage])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  }

  const generateDMMessage = (userInput: string): string => {

    const responses = [
      "Вы подходите к двери и открываете ее.",
      "Вы пытаетесь подойти к двери, но она удаляется от вас.",
      "Вы подходите к двери, но под вашими ногами появляется ловушка.",
      "Вы подходите к двери, но она оказывается мимиком."
    ]
    return responses[Math.floor(Math.random() * responses.length)]
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
