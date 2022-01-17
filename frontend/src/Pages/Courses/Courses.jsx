import FindFilters from "../../Components/Filters/FindFilters";
import Course from "./Course";
import s from "./Courses.module.css"

const Courses = (props) => {

    let coursesElements = props.courses.map((course) => <Course id={course.id} name={course.name} description={course.description} cost={course.cost}
                                                                link={course.link} duration={course.duration}/>)
    return (
        <div className={s.content}>

            <FindFilters filtersAreOpen={props.filtersAreOpen}/>
            {coursesElements}
        </div>
    );
}
export default Courses;