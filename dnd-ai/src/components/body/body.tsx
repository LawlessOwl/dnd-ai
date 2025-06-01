import ChatWindow from "../chatWindow/chatWindow"
import styles from './styles/body.module.scss'

const Body = () => {
  return (
    <div className={styles.bodyContainer}>
      <ChatWindow/>
    </div>
  )
}

export default Body
