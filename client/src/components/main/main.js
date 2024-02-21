import React from "react";
import style from "./style/main.module.scss"

const MessageBody = (props) => {
    return (
        <div className={style.messageBody}>
            <p className={style.userNickName}>{props.nickname}</p>
            <p className={style.messageText}>{props.message}</p>
        </div>
    )
}

const UserChatBody = (props) => {
    return (
        <img src={props.icon} alt="user-avatar" className={style.userAvatar}/>
    )
}

export const Main = (props) => {
    let UserIcon = props.userInfo.map((user) => {
        return (
            <UserChatBody icon={user.icon}/>)
    })
    
    let UserItem = props.userInfo.map((user) => {
        return (
            <MessageBody nickname={user.nickname} message={user.message}/>)
    })
    console.log(UserItem)
    
    return (
        <main className={style.main}>
          <div className={style.chatBody}>
              <div className={style.userText}>
                { UserIcon }
                { UserItem }
              </div>
          </div>
          <div className={style.chatInput}>
              <textarea name="" id="" cols="30" rows="10" placeholder="Input a message" className={style.messageTextArea}></textarea>
              <button>Send</button>
          </div>
        </main>
    )
}