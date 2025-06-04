import type { MessageType } from '@/types/message'
import MessageElement from './Message/Message'
import styles from './styles/chatWindow.module.scss'

type ChatWindowProps = {
  messages: MessageType[]
  inputValue: string
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSend: () => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const ChatWindow = ({
  messages,
  inputValue,
  onInputChange,
  onSend,
  onKeyDown
}: ChatWindowProps) => {
  return (
    <div className={styles.chatWindow}>
      <h1 className={styles.chatWindowTitle}>Your journey</h1>
      <div className={styles.chatWindowContent}>
        <div className={styles.chatWindowMessages}>
          {messages && messages.length > 0 ? (
            messages.map((message) => (
              <MessageElement
              key={message.id}
              text={message.text}
              userName={message.userName}
              isCurrentUser={message.isCurrentUser}
              userAvatar={message.userAvatar}
              />
            ))
          ) : (
            <p className={styles.chatWindowMessage}>No messages yet</p>
          )}
        </div>
        <div className={styles.chatWindowInput}>
          <input type="text"
          placeholder="Type your message here"
          className={styles.chatWindowTextField}
          value={inputValue}
          onChange={onInputChange}
          onKeyDown={onKeyDown}/>
          <button className={styles.chatWindowSendButton} onClick={onSend}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default ChatWindow
