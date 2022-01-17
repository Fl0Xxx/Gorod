import axios from 'axios';

const BACKEND_URL = 'http://localhost:8000';

export default class ConnectionService {

    constructor() {
    }

    registration(register){
        const url = `${BACKEND_URL}/api/registration/`;
        // return axios.post(url, register).then(response => response.data);
        return axios.post(url, register).then(response => response.data);
    }

    getCourses() {
        const url = `${BACKEND_URL}/api/courses/`;
        return axios.get(url).then(response => response.data);
    }

    getRequests(username) {
        const url = `${BACKEND_URL}api/requests/${username}`;
        return axios.get(url).then(response => response.data);
    }

    getUser(login) {
        const url = `${BACKEND_URL}/api/users/${login}`;
        return axios.get(url).then(response => response.data);
    }

    signUp(data) {
        const url = `${BACKEND_URL}/api/sing_up/`;
        return axios.post(url, data).then(response => response.data);
    }

    signIn(data) {
        const url = `${BACKEND_URL}/api/sing_in/`;
        return axios.post(url, data).then(response => response.data);
    }

    pushDocument(document) {
        const url = `${BACKEND_URL}/api/new_document/`;
        return axios.post(url, document);
    }

    /*    updateSomething(something){
            const url = `${BACKEND_URL}/api/customers/${something}`;
            return axios.put(url,something);
        }*/
    /*    deleteSomething(something){
            const url = `${BACKEND_URL}/api/delete/${something}`;
            return axios.delete(url);
        }*/
}