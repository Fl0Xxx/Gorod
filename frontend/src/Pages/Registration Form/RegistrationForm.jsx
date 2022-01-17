import "./RegistrationForm.css"
import {NavLink} from "react-router-dom";
import React from "react";
import axios from 'axios';
import {
    updateRegAddressActionCreator,
    updateLoginAreaActionCreator,
    updatePasswordAreaActionCreator,
    updateRegEmailActionCreator,
    updateRegFioActionCreator, updateRegHphnumberActionCreator,
    updateRegLoginActionCreator,
    updateRegPassword2ActionCreator,
    updateRegPasswordActionCreator,
    updateRegPhnumberActionCreator
} from "../../Redux/store";

const BACKEND_URL = 'http://localhost:8000';

const RegistrationForm = (props) => {
    let onLoginChange = () => {
        let login_val = login.current.value
        props.dispatch(updateRegLoginActionCreator(login_val))
    }
    let onPasswordChange = () => {
        let password_val = password.current.value
        props.dispatch(updateRegPasswordActionCreator(password_val))
    }
    let onPassword2Change = () => {
        let password_val2 = password2.current.value
        props.dispatch(updateRegPassword2ActionCreator(password_val2))
    }
    let onFioChange = () => {
        let fio_val = fio.current.value
        props.dispatch(updateRegFioActionCreator(fio_val))
    }
    let onEmailChange = () => {
        let email_val = email.current.value
        props.dispatch(updateRegEmailActionCreator(email_val))
    }
    let onPhChange = () => {
        let ph_val = phnumber.current.value
        props.dispatch(updateRegPhnumberActionCreator(ph_val))
    }
    let onHphChange = () => {
        let hph_val = hphnumber.current.value
        props.dispatch(updateRegHphnumberActionCreator(hph_val))
    }
    let onAddressChange = () => {
        let addr_val = address.current.value
        props.dispatch(updateRegAddressActionCreator(addr_val))
    }



    let onSubmit = () => {
        const url = `${BACKEND_URL}/api/registration/`;
        axios.post(url, {login: login.current.value,
                         password: password.current.value,
                         password2: password2.current.value,
                         email: email.current.value,
                         address: address.current.value,
                         fio: fio.current.value,
                         phnumber: phnumber.current.value,
                         hphnumber: hphnumber.current.value})
        console.log('1')
        return false;
    }

    let login = React.createRef()
    let password = React.createRef()
    let password2 = React.createRef()
    let email = React.createRef()
    let address = React.createRef()
    let fio = React.createRef()
    let phnumber = React.createRef()
    let hphnumber = React.createRef()
    return (
        <div>
            <div id="Register">
                <div className="container">
                    <div id="register-row" className="row justify-content-center align-items-center">
                        <div id="register-column" className="col-md-6">
                            <div id="register-box" className="col-md-12">
                                <form id="register-form" className="form" action="" method="post">
                                    <h3 className="text-center text-label">Регистрация</h3>
                                    <div className="form-group text-label">
                                        <label htmlFor="username">Логин:</label><br/>
                                        <input type="text" name="username" id="username" className="form-control"
                                               ref={login}/>
                                        <label htmlFor="password">Пароль:</label><br/>
                                        <input type="password" name="password" id="password" className="form-control"
                                               ref={password}/>
                                        <label htmlFor="password">Пароль повторно:</label><br/>
                                        <input type="password" name="password" id="password" className="form-control"
                                               ref={password2}/>
                                        <label htmlFor="email">Email:</label><br/>
                                        <input type="email" name="email" id="email" className="form-control"
                                               ref={email}/>
                                        <label htmlFor="fio">ФИО:</label><br/>
                                        <input type="text" name="fio" id="fio" className="form-control" ref={fio}/>
                                        <label htmlFor="address">Адрес:</label><br/>
                                        <input type="text" name="address" id="address" className="form-control"
                                               ref={address}/>
                                        <label htmlFor="phone">Номер мобильного телефона:</label><br/>
                                        <input type="tel" name="phone" id="phone" ref={phnumber}
                                               className="form-control"/>
                                        <label htmlFor="home_phone">Номер домашнего
                                            телефона:</label><br/>
                                        <input type="text" name="home_phone" id="home_phone" className="form-control"
                                               ref={hphnumber}/><br/>
                                        {/*
                                        <button className="sbm d-flex justify-content-center"
                                                onClick={props.dispatch("")}>Зарегистрироваться
                                        </button>
                                        <br/>
                                        */}
                                        <input type="button" name="submit" className="sbm"
                                               value="Зарегистрироваться" onClick={onSubmit} to="/requests" />
                                        {/*TODO::Сделать логику проверки полей*/}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RegistrationForm