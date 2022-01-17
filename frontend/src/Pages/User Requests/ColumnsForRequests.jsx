import s from "./ColumnsForRequests.module.css"

const ColumnsForRequests = () => {
    return (
        <div className={s.general}>
            <h4 className={s.name}>Имя</h4>
            <h4 className={s.course}>Курс</h4>
            <h4 className={s.state}>Статус</h4>
            <h4 className={s.period}>Период</h4>
            <h4 className={s.date}>Дата</h4>
        </div>
    );
}
export default ColumnsForRequests;