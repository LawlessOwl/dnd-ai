import React from "react";
import { Header } from "../header/header";
import { Main } from "../main/main";
import style from "./style/body.module.scss"


export const Body = (props) => {
    
    return (
        <body className={style.body}>
            <Header/>
            <Main userInfo={props.userInfo} addMessage={props.addMessage} updateMessageText={props.updateMessageText} newMessageText={props.newMessageText}/>
        </body>
    )
}