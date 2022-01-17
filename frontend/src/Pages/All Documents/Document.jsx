import s from "./Document.module.css"

const Document = (props) => {
    return (
        <div className={s.request}>
            <div className={s.course}>{props.course}</div>
            <div className={s.kid_fio_german}>{props.kid_fio_german}</div>
            <div className={s.kid_fio_russian}>{props.kid_fio_russian}</div>
            <div className={s.kid_day_of_birth}>{props.kid_day_of_birth}</div>
            <div className={s.parent_fio_german}>{props.parent_fio_german}</div>
            <div className={s.parent_fio_russian}>{props.parent_fio_russian}</div>
            <div className={s.address_german}>{props.address_german}</div>
            <div className={s.home_phone}>{props.home_phone}</div>
            <div className={s.phone}>{props.phone}</div>
            <div className={s.email}>{props.email}</div>
            <div className={s.date}>{props.date}</div>
            <div className={s.prd}>{props.period}</div>
            <div className={s.state}>{props.state}</div>
        </div>
    );
}
export default Document;