import styles from './styles/Message.module.scss'

type MessageProps = {
  text: string
  userName: string
  userAvatar? : string
  isCurrentUser?: boolean
}

const MessageElement = ({ text, userName, userAvatar, isCurrentUser = false}: MessageProps) => {
  return (
    <div className={`${styles.message} ${isCurrentUser ?
      styles.messageCurrentUser : styles.messageOtherUser
    }`}>
      <div className={styles.userAvatar}>
        {userAvatar ? (
          <img src={userAvatar}
          alt={userName}
          className={styles.userAvatarImage} />
        ) : (
          <div className={styles.userAvatarPlaceholder}>
            {userName.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <div className={styles.messageContent}>
        <div className={styles.messageHeader}>
          <span className={styles.userName}>{userName}</span>
        </div>
        <p className={styles.messageText}>{text}</p>
      </div>
    </div>
  )

}


export default MessageElement
