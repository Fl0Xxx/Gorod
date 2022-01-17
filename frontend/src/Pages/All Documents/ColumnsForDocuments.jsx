import s from './ColumnsForDocuments.module.css'

const ColumnsForDocuments = () => {
    return (
        <div className={s.request}>
            <div className={s.course}>Курс</div>
            <div className={s.kid_fio_german}>ФИО ребенка(нем.)</div>
            <div className={s.kid_fio_russian}>ФИО ребенка(рус.)</div>
            <div className={s.kid_day_of_birth}>Дата рождения ребенка</div>
            <div className={s.parent_fio_german}>ФИО родителя(нем.)</div>
            <div className={s.parent_fio_russian}>ФИО родителя(рус.)</div>
            <div className={s.address_german}>Адрес</div>
            <div className={s.home_phone}>Дом. тел.</div>
            <div className={s.phone}>Тел.</div>
            <div className={s.email}>Email</div>
            <div className={s.date}>Дата подачи заявленя</div>
            <div className={s.prd}>Период</div>
            <div className={s.state}>Статус</div>
        </div>
    );
}
export default ColumnsForDocuments;