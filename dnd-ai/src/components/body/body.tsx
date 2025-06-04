import ChatContainer from "../../containers/chatContainer/chatContainer"
import styles from './styles/body.module.scss'

const Body = () => {
  return (
    <div className={styles.bodyContainer}>
      <ChatContainer/>
    </div>
  )
}

export default Body
