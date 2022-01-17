import "./LogInForm.css"
import {NavLink} from "react-router-dom"
import {useHistory} from "react-router-dom";
import React from "react";
import {enterActionCreator, updateLoginAreaActionCreator, updatePasswordAreaActionCreator} from "../../Redux/store";
import axios from 'axios';

const BACKEND_URL = 'http://localhost:8000';

const LogInForm = (props) => {
    let enter = () => {
        const url = `${BACKEND_URL}/api/authentication/`;
        let a = axios.post(url, {login: login.current.value,
                                 password: password.current.value})
        console.log(a)
        return false;
        // props.dispatch(enterActionCreator())
    }
    /*TODO: добаить таких же обработчиков изменения введенной строки в инпуты для всех инпутов на сайте. хранить их содержимое в стейт*/
    let onLoginChange = () => {
        let login_val = login.current.value
        props.dispatch(updateLoginAreaActionCreator(login_val))
    }
    let onPasswordChange = () => {
        let password_val = password.current.value
        props.dispatch(updatePasswordAreaActionCreator(password_val))
    }
    let login = React.createRef()
    let password = React.createRef()

    const history = useHistory();
    if (props.isLoggedIn === 1) {
        history.push('/')
    }
    return (
        <div>
            <div id="login">
                <form id="login-form" className="form" action=" " method="post">
                    <h3 className="text-center text-label">Вход</h3>
                    <div className="form-group">
                        <label htmlFor="username" className="text-label">Логин:</label><br/>
                        <input type="text" name="username" id="username" className="form-control"
                               value={props.login_area} onChange={onLoginChange}
                               ref={login}/>
                        <label htmlFor="password" className="text-label">Пароль:</label><br/>
                        <input type="password" name="password" id="password" className="form-control"
                               value={props.password_area} onChange={onPasswordChange}
                               ref={password}/>
                        <NavLink to="/sign_up" className="nl-reg">Зарегестрироваться</NavLink><br/>
                        <NavLink to='/sign_in' onClick={enter}
                                 className='sbm d-flex justify-content-center'>Войти</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default LogInForm