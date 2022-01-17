import './BeginPage.css'
import {NavLink} from "react-router-dom";

const BeginPage = (props) => {
    const alertFunc = () => {
        alert("Пожалуйста войдите или зарегистрируйтесь")
    }
    if (props.isLoggedIn === 1) {
        return (
            <div>
                <img src="./../../mainLogo.jpg" alt="" className="img-firstp"/>
                <div className="button1"><NavLink className="btn btn-warning btn-lg" to="/document_form">Подать
                    заявку</NavLink></div>
            </div>
        );
    } else {
        return (
            <div>
                <img src="./../../mainLogo.jpg" alt="" className="img-firstp"/>
                <div className="button1"><NavLink className="btn btn-warning btn-lg" to="/" onClick={alertFunc}>Подать
                    заявку</NavLink></div>
            </div>
        );
    }
}
export default BeginPage;
