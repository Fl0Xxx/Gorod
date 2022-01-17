import s from "./Request.module.css"

const Request = (props) => {
    return (
        <div className={s.request}>
            <div className={s.name}>{props.name}</div>
            <div className={s.course}>{props.crs}</div>
            <div className={s.state}>{props.state}</div>
            <div className={s.period}>{props.prd}</div>
            <div className={s.date}>{props.date}</div>
        </div>
    );
}
export default Request;