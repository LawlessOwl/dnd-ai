import styles from './styles/chatWindow.module.scss'

const ChatWindow = () => {
  return (
    <div className={styles.chatWindow}>
      <h1 className={styles.chatWindowTitle}>Your journey</h1>
      <div className={styles.chatWindowContent}>
        <div className={styles.chatWindowMessages}>
        </div>
        <div className={styles.chatWindowInput}>
          <input type="text" placeholder="Type your message here" className={styles.chatWindowTextField}/>
          <button className={styles.chatWindowSendButton}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default ChatWindow
