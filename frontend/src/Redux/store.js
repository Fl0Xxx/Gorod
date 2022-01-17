import ConnectionService from "./ConnectionService";

const connectionService = new ConnectionService();
let store = {
    _state: {
        courses: [
            {
                id: 1,
                name: 'Название',
                description: "Краткое описание курса",
                cost: 100, link: '/courses/1',
                duration: 'duration cort'
            },
            {
                id: 2,
                name: 'Name2',
                description: "description2",
                cost: 200,
                link: '/courses/2',
                duration: 'duration cort'
            }],
        documents: [],
        users: [{login: "admin", password: "admin"}],/*TODO:: убрать тк это для тестов*/
        isLoggedIn: 0,
        login_area: "",
        password_area: "",
        registration_form: {
            login: '',
            password: '',
            password2: '',
            email: '',
            fio: '',
            address: '',
            phnumber: '',
            hphnumber: ''
        },
        filtersAreOpen: 0,

        kid_name_german: "",
        kid_surname_german: "",
        kid_name_russian: "",
        kid_surname_russian: "",
        geb: "",
        kid_birthday: "",
        parent_fio_german: "",
        parent_fio_russian: "",
        address_german: "",
        home_phone: "",
        phone: "",
        email: "",
        date: "",
        period: "",
        course: "",
        response: ""
    },

    getState() {
        return this._state
    },
    _rendererEntireTree() {
        console.log("render")
    },
    renderer(observer) {
        // eslint-disable-next-line no-undef
        this._rendererEntireTree = observer
    },

    /*TODO:: убрать тестовую сортировку*/
    _sortDocs(method) {

        if (method == 'by name') {
            this._state.docs.sort((a, b) => a.kid_surname_german > b.kid_surname_german ? 1 : -1);
        }
        if (method == 'by period') {

        }
    },


    /*сохраняем заявку локально*/
    _addDocument(date) {
        let Document = {
            kid_name_german: this._state.kid_name_german,
            kid_surname_german: this._state.kid_surname_german,
            kid_name_russian: this._state.kid_name_russian,
            kid_surname_russian: this._state.kid_surname_russian,
            kid_day_of_birth: this._state.kid_birthday,
            parent_fio_german: this._state.parent_fio_german,
            parent_fio_russian: this._state.parent_fio_russian,
            address_german: this._state.address_german,
            home_phone: this._state.home_phone,
            phone: this._state.phone,
            email: this._state.email,
            date: date,
            period: this._state.period,
            course: this._state.course,
            state: "new"
        }
        this._state.documents.push(Document)
        connectionService.pushDocument(Document).then((resp) => {
            this._state.response = resp.data;
        });
        /*TODO:: тут должен быть код отправки данного документа на сервер*/

        this._update_kid_name_german('')
        this._update_kid_surname_german('')
        this._update_kid_name_russian('')
        this._update_kid_surname_russian('')
        this._update_kid_birthday('')
        this._update_parent_fio_german('')
        this._update_parent_fio_russian('')
        this._update_address_german('')
        this._update_home_phone('')
        this._update_phone('')
        this._update_email('')
        this._update_course('')
        this._rendererEntireTree(this._state)
    },

    /*методы обновления данных*/
    _updateLoginArea(text) {
        this._state.login_area = text
        this._rendererEntireTree(this._state)
    },
    _updatePasswordArea(text) {
        this._state.password_area = text
        this._rendererEntireTree(this._state)
    },
    _update_kid_name_german(input) {
        this._state.kid_name_german = input
        this._rendererEntireTree(this._state)
    },
    _update_kid_surname_german(input) {
        this._state.kid_surname_german = input
        this._rendererEntireTree(this._state)
    },
    _update_kid_name_russian(input) {
        this._state.kid_name_russian = input
        this._rendererEntireTree(this._state)
    },
    _update_kid_surname_russian(input) {
        this._state.kid_surname_russian = input
        this._rendererEntireTree(this._state)
    },
    _update_kid_birthday(input) {
        this._state.kid_birthday = input
        this._rendererEntireTree(this._state)
    },
    _update_parent_fio_german(input) {
        this._state.parent_fio_german = input
        this._rendererEntireTree(this._state)
    },
    _update_parent_fio_russian(input) {
        this._state.parent_fio_russian = input
        this._rendererEntireTree(this._state)
    },
    _update_address_german(input) {
        this._state.address_german = input
        this._rendererEntireTree(this._state)
    },
    _update_home_phone(input) {
        this._state.home_phone = input
        this._rendererEntireTree(this._state)
    },
    _update_phone(input) {
        this._state.phone = input
        this._rendererEntireTree(this._state)
    },
    _update_email(input) {
        this._state.email = input
        this._rendererEntireTree(this._state)
    },
    _update_date(input) {
        this._state.date = input
        this._rendererEntireTree(this._state)
    },
    _update_period(input) {
        this._state.period = input
        this._rendererEntireTree(this._state)
    },
    _update_course(input) {
        this._state.course = input
        this._rendererEntireTree(this._state)
    },
    _updateReg(reg) {
        this.registration_form = reg
        this._rendererEntireTree(this._state)
    },
    _updateRegLogin(text) {
        this._state.registration_form.login = text
        this._rendererEntireTree(this._state)
    },
    _updateRegPassword(text) {
        this._state.registration_form.password = text
        this._rendererEntireTree(this._state)
    },
    _updateRegPassword2(text) {
        this._state.registration_form.password2 = text
        this._rendererEntireTree(this._state)
    },
    _updateRegFio(text) {
        this._state.registration_form.fio = text
        this._rendererEntireTree(this._state)
    },
    _updateRegEmail(text) {
        this._state.registration_form.email = text
        this._rendererEntireTree(this._state)
    },
    _updateRegAddress(text) {
        this._state.registration_form.address = text
        this._rendererEntireTree(this._state)
    },
    _updateRegPhnumber(text) {
        this._state.registration_form.phnumber = text
        this._rendererEntireTree(this._state)
    },
    _updateRegHphnumber(text) {
        this._state.registration_form.hphnumber = text
        this._rendererEntireTree(this._state)
    },


    dispatch(action) { //  type: 'НАЗВАНИЕ ФУНКЦИИ', variable: variable }
        if (action.type === 'ADD-DOCUMENT') {
            let Document = {
                kid_fio_german: this._state.kid_fio_german,
                kid_fio_russian: this._state.kid_fio_russian,
                geb: this._state.geb,
                kid_birthday: this._state.kid_birthday,
                parent_fio_german: this._state.parent_fio_german,
                parent_fio_russian: this._state.parent_fio_russian,
                address_german: this._state.address_german,
                home_phone: this._state.home_phone,
                phone: this._state.phone,
                email: this._state.email,
                date: action.date,
                period: this._state.period,
                course: this._state.course,
                state: "new"
            }
            this._state.documents.push(Document)
            connectionService.pushDocument(Document).then((resp) => {
                this._state.response = resp.data;
            });
            /*TODO:: тут должен быть код отправки данного документа на сервер ( axios )*/
            this._update_kid_name_german('')
            this._update_kid_surname_german('')
            this._update_kid_name_russian('')
            this._update_kid_surname_russian('')
            this._update_kid_birthday('')
            this._update_parent_fio_german('')
            this._update_parent_fio_russian('')
            this._update_address_german('')
            this._update_home_phone('')
            this._update_phone('')
            this._update_email('')
            this._update_course('')
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-COURSES') {
            this._state.courses = connectionService.getCourses()
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-USER-REQUESTS') {
            this._state.documents = connectionService.getRequests()
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-LOGIN-AREA') {
            this._state.login_area = action.login_area
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-PASSWORD-AREA') {
            this._state.password_area = action.password_area
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-KID-NAME-GERMAN') {
            this._state.kid_name_german = action.kid_name_german
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-KID-SURNAME-GERMAN') {
            this._state.kid_surname_german = action.kid_surname_german
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-KID-NAME-RUSSIAN') {
            this._state.kid_name_russian = action.kid_name_russian
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-KID-SURNAME-RUSSIAN') {
            this._state.kid_surname_russian = action.kid_surname_russian
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-KID-BIRTHDAY') {
            this._state.kid_birthday = action.kid_birthday
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-PARENT-FIO-GERMAN') {
            this._state.parent_fio_german = action.parent_fio_german
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-PARENT-FIO-RUSSIAN') {
            this._state.parent_fio_russian = action.parent_fio_russian
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-ADDRESS-GERMAN') {
            this._state.address_german = action.address_german
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-HOME-PHONE') {
            this._state.home_phone = action.home_phone
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-PHONE') {
            this._state.phone = action.phone
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-EMAIL') {
            this._state.email = action.email
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-DATE') {
            this._state.date = action.date
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-PERIOD') {
            this._state.period = action.period
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-COURSE') {
            this._state.course = action.course
            this._rendererEntireTree(this._state)
        } else if (action.type === 'ENTER') {
            /*TODO:: переписать для работы с сервером*/
            /*let data={login:this._state.login_area, password:this._state.password_area}
            let res= connectionService.signIn(data)
            if(res===''){ // что тут в ответе сервера?
                this._state.isLoggedIn = 1
                this._updateLoginArea('')
                this._updatePasswordArea('')
                data={login:'', password:''}
                this._rendererEntireTree(this._state)
            }
            else{
                alert("wrong login or password")
            }*/
            if (this._state.login_area == this._state.users[0].login && this._state.password_area == this._state.users[0].password) {
                this._state.isLoggedIn = 1
                this._updateLoginArea('')
                this._updatePasswordArea('')
                this._rendererEntireTree(this._state)
            }
        } else if (action.type === 'EXIT') {
            this._state.isLoggedIn = 0
            this._state.documents = []

            /*TODO:: обнулить стейт*/
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-REG-LOGIN') {
            this._state.registration_form.login = action.reg_login
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-REG-PASSWORD') {
            this._state.registration_form.password = action.reg_password
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-REG-PASSWORD2') {
            this._state.registration_form.password2 = action.reg_password2
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-REG-FIO') {
            this._state.registration_form.fio = action.reg_fio
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-REG-EMAIL') {
            this._state.registration_form.email = action.reg_email
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-REG-PHNUMBER') {
            this._state.registration_form.phnumber = action.reg_phnumber
            this._rendererEntireTree(this._state)
        } else if (action.type === 'UPDATE-REG-HPHNUMBER') {
            this._state.registration_form.hphnumber = action.reg_hphnumber
            this._rendererEntireTree(this._state)
        } else if (action.type === 'SIGN_UP') {
            // let data=this._state.registration_form
            /*TODO сделать проверку полей регистрации перед отправкой*/
            // let res = connectionService.signUp(data)
            // if(res===''){
                //перейти на главную страницу
            // }//if OK
            /*
            this._updateReg({
                login: '',
                password: '',
                password2: '',
                email: '',
                fio: '',
                address: '',
                phnumber: '',
                hphnumber: ''
            })
            this._rendererEntireTree(this._state)
            */
        }
    }
}

export const updateRegLoginActionCreator = (reg_login) => ({type: 'UPDATE-REG-LOGIN', login: reg_login})
export const updateRegPasswordActionCreator = (reg_password) => ({type: 'UPDATE-REG-PASSWORD', password: reg_password})
export const updateRegPassword2ActionCreator = (reg_password2) => ({
    type: 'UPDATE-REG-PASSWORD2',
    password2: reg_password2
})
export const updateRegEmailActionCreator = (reg_email) => ({type: 'UPDATE-REG-EMAIL', email: reg_email})
export const updateRegFioActionCreator = (reg_fio) => ({type: 'UPDATE-REG-FIO', fio: reg_fio})
export const updateRegAddressActionCreator = (reg_address) => ({type: 'UPDATE-REG-ADDRESS', address: reg_address})
export const updateRegPhnumberActionCreator = (reg_phnumber) => ({type: 'UPDATE-REG-PHNUMBER', phnumber: reg_phnumber})
export const updateRegHphnumberActionCreator = (reg_hphnumber) => ({
    type: 'UPDATE-REG-HPHNUMBER',
    hphnumber: reg_hphnumber
})
export const updateLoginAreaActionCreator = (login) => ({type: 'UPDATE-LOGIN-AREA', login_area: login})
export const updatePasswordAreaActionCreator = (password) => ({type: 'UPDATE-PASSWORD-AREA', password_area: password})
export const enterActionCreator = () => ({type: 'ENTER'})
export const addDocumentActionCreator = (today) => ({type: 'ADD-DOCUMENT', date: today})
export const updateKidNameGermanActionCreator = (kid_name_german) => ({
    type: 'UPDATE-KID-NAME-GERMAN',
    kid_name_german: kid_name_german
})
export const updateKidSurnameGermanActionCreator = (kid_surname_german) => ({
    type: 'UPDATE-KID-SURNAME-GERMAN',
    kid_surname_german: kid_surname_german
})
export const updateKidNameRussianActionCreator = (kid_name_russian) => ({
    type: 'UPDATE-KID-NAME-RUSSIAN',
    kid_name_russian: kid_name_russian
})
export const updateKidSurnameRussianActionCreator = (kid_surname_russian) => ({
    type: 'UPDATE-KID-SURNAME-RUSSIAN',
    kid_surname_russian: kid_surname_russian
})
export const updateKidBirthdayActionCreator = (kid_birthday) => ({
    type: 'UPDATE-KID-BIRTHDAY',
    kid_birthday: kid_birthday
})
export const updateParentFioGermanActionCreator = (parent_fio_german) => ({
    type: 'UPDATE-PARENT-FIO-GERMAN',
    parent_fio_german: parent_fio_german
})
export const updateParentFioRussianActionCreator = (parent_fio_russian) => ({
    type: 'UPDATE-PARENT-FIO-RUSSIAN',
    parent_fio_russian: parent_fio_russian
})
export const updateAddressGermanActionCreator = (address_german) => ({
    type: 'UPDATE-ADDRESS-GERMAN',
    address_german: address_german
})
export const updateHomePhoneActionCreator = (home_phone) => ({type: 'UPDATE-HOME-PHONE', home_phone: home_phone})
export const updatePhoneActionCreator = (phone) => ({type: 'UPDATE-PHONE', phone: phone})
export const updateEmailActionCreator = (email) => ({type: 'UPDATE-EMAIL', email: email})
/*export const updatePeriodActionCreator=(period)=>({type:'UPDATE-PERIOD', period:period})*/
export const updateCourseActionCreator = (course) => ({type: 'UPDATE-COURSE', course: course})

export default store