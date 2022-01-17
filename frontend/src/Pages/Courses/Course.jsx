import s from "./Course.module.css"
import {NavLink} from "react-router-dom";
import course from "./course.png"

const Course = (props) => {
    return (
        <div className={s.course}>
            <img className={s.image} src={course}/>
            <div className={s.name}><NavLink to={props.link}>{props.name}</NavLink></div>
            <div className={s.descr}>{props.description}</div>
            <div className={s.costs}>costs</div>
        </div>
    );
}
export default Course;