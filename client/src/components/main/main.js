import React from "react";
import style from "./style/main.module.scss"

const MessageBody = (props) => {
    return (
        <div className={style.userText}>
            <img src={props.icon} alt="user-avatar" className={style.userAvatar}/>
            <div className={style.messageBody}>
                <p className={style.userNickName}>{props.nickname}</p>
                <p className={style.messageText}>{props.message}</p>
            </div>
        </div>
    )
}

export const Main = (props) => {
    
    let UserItem = props.userInfo.map((user) => {
        return (
            <MessageBody icon={user.icon} nickname={user.nickname} message={user.message}/>)
    })
    
    let MessageItem = () => {
        return (
            <div className={style.chatBody}>
                { UserItem }
            </div>
        )
    }

    let textMessage = React.createRef();
    let newMessage = () => {
        let message = textMessage.current.value;
        props.addMessage(message)
    }
    
    return (
        <main className={style.main}>
            <MessageItem />
          <div className={style.chatInput}>
              <textarea name="" id="" cols="30" rows="10" placeholder="Input a message" className={style.messageTextArea} ref={ textMessage }></textarea>
              <button onClick={ newMessage }>Send</button>
          </div>
        </main>
    )
}