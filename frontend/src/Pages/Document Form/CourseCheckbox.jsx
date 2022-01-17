import s from "./CourseCheckbox.module.css"
import {NavLink} from "react-router-dom";

const CourseCheckbox = (props) => {
    return (
        <div className={s.course}>
            <input type="checkbox" className={s.check} name="check" id={props.id}/>
            <div className={s.name}><NavLink to={props.link}>{props.name}</NavLink></div>
        </div>
    );
}
export default CourseCheckbox;