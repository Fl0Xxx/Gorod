import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import BeginPage from "./Pages/Begin/BeginPage";
import Courses from "./Pages/Courses/Courses";
import Requests from "./Pages/User Requests/Requests";
import LogInForm from "./Pages/Log In Form/LogInForm";
import RegistrationForm from "./Pages/Registration Form/RegistrationForm";
import DocumentForm from "./Pages/Document Form/DocumentForm";
import AllDocuments from "./Pages/All Documents/AllDocuments";
import CustomersList from "./CustomersList"
import React from 'react'


const App = (props) => {

    /* const wrapperObj=[
         {
             path:'/',
             exact:true,
             render:() => <BeginPage isLoggedIn={props.dat.isLoggedIn}/>
         },
         {
             path:'/courses',
             exact:false,
             render:() => <Courses courses={props.dat.courses}
                                   filtersAreOpen={props.dat.filtersAreOpen}/>
         },
         {
             path:'/requests',
             exact:false,
             render:() => <Requests documents={props.dat.documents}
                                    filtersAreOpen={props.dat.filtersAreOpen}/>
         },
         {
             path:'/sign_in',
             exact:false,
             render:() => <LogInForm dispatch={props.dispatch} login_area={props.login_area}
                                     password_area={props.password_area}/>
         },
         {
             path:'/sign_up',
             exact:false,
             render:() => <RegistrationForm/>
         },
         {
             path:'/document_form',
             exact:false,
             render:() => <DocumentForm dispatch={props.dispatch} dat={props.dat}
                                        filtersAreOpen={props.dat.filtersAreOpen}/>
         },
         {
             path:'/all_documents',
             exact:false,
             render:() => <AllDocuments requests={props.dat.documents}
                                        filtersAreOpen={props.dat.filtersAreOpen}/>
         }
     ]
     const content=wrapperObj.map((component)=>(
         <Route {...component}/>
     ))*/
    return (<BrowserRouter>
            <div className="app-wrapper">
                <Header IsLogginedIn={props.dat.isLoggedIn} dispatch={props.dispatch}/>
                <div className="app-wrapper-content">
                    <Route exact path="/" render={() => <BeginPage isLoggedIn={props.dat.isLoggedIn}/>}/>
                    <Route path="/courses" render={() => <Courses courses={props.dat.courses}
                                                                  filtersAreOpen={props.dat.filtersAreOpen}/>}/>
                    <Route path="/requests" render={() => <Requests documents={props.dat.documents}
                                                                    filtersAreOpen={props.dat.filtersAreOpen}/>}/>
                    <Route path="/sign_in"
                           render={() => <LogInForm isLoggedIn={props.dat.isLoggedIn} dispatch={props.dispatch}
                                                    login_area={props.login_area}
                                                    password_area={props.password_area}/>}/>
                    <Route path="/sign_up"
                           render={() => <RegistrationForm isLoggedIn={props.dat.isLoggedIn} dispatch={props.dispatch}
                                                           reg={props.registration_form}/>}/>
                    <Route path="/document_form" render={() => <DocumentForm dispatch={props.dispatch} dat={props.dat}
                                                                             filtersAreOpen={props.dat.filtersAreOpen}/>}/>
                    <Route path="/all_documents" render={() => <AllDocuments requests={props.dat.documents}
                                                                             filtersAreOpen={props.dat.filtersAreOpen}/>}/>
                    <Route path="/customers" render={() => <CustomersList/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;