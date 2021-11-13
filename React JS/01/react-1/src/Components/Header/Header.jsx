import React from 'react'
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = (props)=>{
    return <header className={style.header}>
        <img src="https://i.pinimg.com/736x/23/80/0b/23800b995292379883a15d9a4c382b22--awesome-logos-animal-logo.jpg"/>
    <div className={style.loginBlock}>
        { props.isAuth ? props.login :
        <NavLink to={'/login'}>Login</NavLink> }
    </div>
    </header>
}
export default Header;