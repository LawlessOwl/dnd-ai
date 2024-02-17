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
        <div className={style.userText}>
            <img src={props.icon} alt="user-avatar" className={style.userAvatar}/>
            <MessageBody nickname='Alisa' message='Hello'/>
        </div>
    )
}

export const Main = () => {
    return (
        <main className={style.main}>
          <div className={style.chatBody}>
              <UserChatBody icon='https://sun9-8.userapi.com/impg/f0eyk3phbS_NZfavSPK0OGoef_xp_EHZsdCvOg/3PX1FcEp2oI.jpg?size=1280x1280&quality=96&sign=8f9c2a0d5b71315c28176129d2ec2981&type=album'/>
          </div>
          <div className={style.chatInput}>
              <textarea name="" id="" cols="30" rows="10" placeholder="Input a message" className={style.messageTextArea}></textarea>
              <button>Send</button>
          </div>
        </main>
    )
}