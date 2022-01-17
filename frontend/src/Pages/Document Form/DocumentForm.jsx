import s from "./DocumentForm.module.css"
import React from 'react'
import {NavLink} from "react-router-dom";
import {
    addDocumentActionCreator,
    updateAddressGermanActionCreator,
    updateEmailActionCreator,
    updateHomePhoneActionCreator,
    updateKidBirthdayActionCreator,
    updateKidNameGermanActionCreator,
    updateKidSurnameGermanActionCreator,
    updateKidNameRussianActionCreator,
    updateKidSurnameRussianActionCreator,
    updateParentFioGermanActionCreator,
    updateParentFioRussianActionCreator,
    updatePhoneActionCreator
} from "../../Redux/store";
import CourseCheckbox from "./CourseCheckbox";


const DocumentForm = (props) => {

    let kid_name_germ = React.createRef();
    let kid_surname_germ = React.createRef();
    let kid_name_rus = React.createRef();
    let kid_surname_rus = React.createRef();
    let kid_db = React.createRef();
    let parent_fio_germ = React.createRef();
    let parent_fio_rus = React.createRef();
    let address_germ = React.createRef();
    let home_ph = React.createRef();
    let ph = React.createRef();
    let em = React.createRef();

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    /*TODO: create period fields*/
    today = dd + '/' + mm + '/' + yyyy;
    let addDocument = () => {
        props.dispatch(addDocumentActionCreator(today))
    }
    let onKngChange = () => {
        let kng = kid_name_germ.current.value
        props.dispatch(updateKidNameGermanActionCreator(kng))
    }
    let onKsgChange = () => {
        let ksg = kid_surname_germ.current.value
        props.dispatch(updateKidSurnameGermanActionCreator(ksg))
    }
    let onKnrChange = () => {
        let knr = kid_name_rus.current.value
        props.dispatch(updateKidNameRussianActionCreator(knr))
    }
    let onKsrChange = () => {
        let ksr = kid_surname_rus.current.value
        props.dispatch(updateKidSurnameRussianActionCreator(ksr))
    }
    let onKdbChange = () => {
        let kdb = kid_db.current.value
        props.dispatch(updateKidBirthdayActionCreator(kdb))
    }
    let onPfgChange = () => {
        let pfg = parent_fio_germ.current.value
        props.dispatch(updateParentFioGermanActionCreator(pfg))
    }
    let onPfrChange = () => {
        let pfr = parent_fio_rus.current.value
        props.dispatch(updateParentFioRussianActionCreator(pfr))
    }
    let onAgChange = () => {
        let ag = address_germ.current.value
        props.dispatch(updateAddressGermanActionCreator(ag))
    }
    let onHpChange = () => {
        let hp = home_ph.current.value
        props.dispatch(updateHomePhoneActionCreator(hp))
    }
    let onPhChange = () => {
        let phn = ph.current.value
        props.dispatch(updatePhoneActionCreator(phn))
    }
    let onEmChange = () => {
        let eml = em.current.value
        props.dispatch(updateEmailActionCreator(eml))
    }

    let coursesList = props.dat.courses.map((course) => <CourseCheckbox id={course.id} name={course.name} cost={course.cost}
                                                                link={course.link} duration={course.duration}/>)


    return (
        <div className={s.container}>
            <p className={s.empty}/>
            <p className={s.title}>Anmeldung für das Schuljahr 2021/2022</p>
            <label className={s.kid_name_german} htmlFor="kid_name_german">Name des Kindes</label>
            <input className={s.kid_name_german_inp} type="text" name="kid_name_german" ref={kid_name_germ}
                   value={props.dat.kid_name_german} onChange={onKngChange}/>

            <label className={s.kid_surname_german} htmlFor="kid_surname_german">Vorname des Kindes</label>
            <input className={s.kid_surname_german_inp} type="text" name="kid_surname_german" ref={kid_surname_germ}
                   value={props.dat.kid_surname_german} onChange={onKsgChange}/>

            <label className={s.kid_name_russian} htmlFor="kid_name_russian">Имя ребёнка</label>
            <input className={s.kid_name_russian_inp} type="text" name="kid_name_russian" ref={kid_name_rus}
                   value={props.dat.kid_name_russian} onChange={onKnrChange}/>

            <label className={s.kid_surname_russian} htmlFor="kid_surname_russian">Фамилия ребёнка</label>
            <input className={s.kid_surname_russian_inp} type="text" name="kid_surname_russian" ref={kid_surname_rus}
                   value={props.dat.kid_surname_russian} onChange={onKsrChange}/>


            <label className={s.geb} htmlFor="kid_dofb">День рождения</label><br/>
            <input className={s.geb_inp} type="date" name="kid_dofb" ref={kid_db}
                   value={props.dat.kid_birthday} onChange={onKdbChange}/>

            <label className={s.par_germ} htmlFor="parent_fio_german">Name, Vorname des
                Erziehungsber. / Teilnehmers</label>
            <input className={s.par_germ_inp} type="text" name="parent_fio_german" ref={parent_fio_germ}
                   value={props.dat.parent_fio_german} onChange={onPfgChange}/>

            <label className={s.par_rus} htmlFor="parent_fio_russian">Фамилия, Имя родителя :</label><br/>
            <input className={s.par_rus_inp} type="" name="parent_fio_russian" ref={parent_fio_rus}
                   value={props.dat.parent_fio_russian} onChange={onPfrChange}/>

            <label className={s.adr} htmlFor="address_german">Adresse:</label>
            <input className={s.adr_inp} type="text" name="address_german" ref={address_germ}
                   value={props.dat.address_german} onChange={onAgChange}/>

            <label className={s.handy} htmlFor="home_phone">Handy:</label>
            <input className={s.handy_inp} type="tel" name="home_phone" ref={home_ph}
                   value={props.dat.home_phone} onChange={onHpChange}
                   pattern="^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$"/>

            <label className={s.tel} htmlFor="phone">Telefon :</label>
            <input className={s.tel_inp} type="tel" name="phone" ref={ph}
                   value={props.dat.phone} onChange={onPhChange}
                   pattern="^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$"/>

            <label className={s.email} htmlFor="email">E-Mail:</label>
            <input className={s.email_inp} type="email" name="email" ref={em}
                   value={props.dat.email} onChange={onEmChange}/>
            <p className={s.minuten}>Minuten pro Unterrichtseinheit (i.d.R. einmal pro Woche). Beitrag pro Monat.</p>
            {/*checkbox*/}
            <div className={s.courses}>{coursesList}</div>
            <div className={s.btn2}>
                <NavLink onClick={addDocument} className="btn btn-warning btn-lg" to="/requests">Подать заявку</NavLink>
            </div>


        </div>
    );
}
export default DocumentForm;