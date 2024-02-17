import React from "react";
import { Header } from "../header/header";
import { Main } from "../main/main";
import style from "./style/body.module.scss"

export const Body = () => {
    return (
        <body className={style.body}>
            <Header/>
            <Main/>
        </body>
    )
}