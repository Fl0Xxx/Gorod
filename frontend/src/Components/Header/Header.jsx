import s from './Header.module.css'
import {NavLink} from "react-router-dom"
import headerLogo from "./headerLogo.jpg"
import axios from 'axios';

const BACKEND_URL = 'http://localhost:8000';

const Header = (props) => {
    let exit = () => {
        const url = `${BACKEND_URL}/api/logout/`;
        let a = axios.post(url)
        console.log(a)
        return false;
        // props.dispatch({type: 'EXIT'})
    }

    if (props.IsLogginedIn) {
        return (
            <div className={s.header}>
                <div className={s.header_logo}>
                    <NavLink to="/"><img className="header_logo" src={headerLogo} alt="cannot display"/></NavLink></div>
                <div className={s.rus}>
                    <NavLink className={s.lang} to="#">ru</NavLink></div>
                <div className={s.deu}>
                    <NavLink className={s.lang} to="#">de</NavLink></div>
                <div className={s.main}>
                    <NavLink className={s.text} to="/">Главная</NavLink></div>
                <div className={s.requests}>
                    <NavLink className={s.text} to="/requests" onClick={props.dispatch('UPDATE-USER-REQUESTS')}>Мои анкеты</NavLink></div>
                <div className={s.courses}>
                    <NavLink className={s.text} to="/courses" onClick={props.dispatch('UPDATE-COURSES')}>Курсы</NavLink></div>
                <div className={s.teachers}>
                    <NavLink className={s.text} to="#">Преподаватели</NavLink></div>
                <div className={s.about_us}>
                    <NavLink className={s.text} to="/about_us">О нас</NavLink></div>
                <div className={s.contacts}>
                    <NavLink className={s.text} to="/contacts">Контакты</NavLink></div>
                <div className={s.exit}>
                    <NavLink className={s.text} to="/" onClick={exit}>Выход</NavLink></div>
            </div>
        );

    }
    return (
        <div className={s.header2}>
            <div className={s.header_logo}>
                <NavLink to="/"><img className="header_logo" src={headerLogo} alt="cannot display"/></NavLink></div>
            <div className={s.rus}>
                <NavLink className={s.lang} to="#">Рус</NavLink></div>
            <div className={s.deu}>
                <NavLink className={s.lang} to="#">Deu</NavLink></div>
            <div className={s.main}>
                <NavLink className={s.text} to="/">Главная</NavLink></div>
            <div className={s.courses}>
                <NavLink className={s.text} to="/courses" onClick={props.dispatch('UPDATE-COURSES')}>Курсы</NavLink></div>
            <div className={s.about_us}>
                <NavLink className={s.text} to="/about_us">О нас</NavLink></div>
            <div className={s.contacts}>
                <NavLink className={s.text} to="/contacts">Контакты</NavLink></div>
            <div className={s.sign_in}>
                <NavLink className={s.text} to="/sign_in">Вход</NavLink></div>
            <div className={s.sign_up}>
                <NavLink className={s.text} to="/sign_up">Регистрация</NavLink></div>
        </div>
    );
}
export default Header;