import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style/header.module.scss"

export const Nav = () => {
    return (
        <nav className="navigationMenu">
            <ul>
                <li>
                    <NavLink to="/" className="navigationItem">Main</NavLink>
                </li>
                <li>
                    <NavLink to="/" className="navigationItem">Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/" className="navigationItem">Settings</NavLink>
                </li>
            </ul>
          </nav>
    )
}

export const Header = () => {
    return (
        <header className={style.header}>
          <h1 className={style.mainPageName}>DND-<span className={style.otherColor}>AI</span></h1>
          <Nav/>
        </header>
    )

}

