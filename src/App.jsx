import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from "react-redux"
import Finalinp4 from "./components/timetable/finalinp4"
import Viewuser from "./components/view/viewuser"
import SignIn from './components/login/signin'
import Register from './components/signup/register'
import Admin from './components/admin/admin'
import Manages from './components/admin/manage'
import Views from './components/view/views'
import Home from './components/home/home'
import Finalinp from './components/timetable/finalinp';
import {store} from "./redux/store";
import Finalinp2 from "./components/timetable/finalinp2"
import Finalinp3 from "./components/timetable/finalinp3"
import Ttstaff from "./components/view/ttstaff"
import Viewhead from './components/view/viewhead';
import Ttviewusr from './components/view/ttviewusr';
export default function App() {
    return (
<>
<Provider store={store}>
        <Router basename = "/tt" >
        <>
        <  Switch >
        <Route exact path = "/" component = { Home } />
        <Route path = "/signin" component = { SignIn }/>
        <Route path = "/manage_account" component = { Manages }/> 
        <Route path = "/admin" component = { Admin }/>  
        <Route path = "/register" component = { Register }/>
        <Route path = "/view_docket" component = { Views }/> 
        <Route path ="/docket_inp" component={Finalinp}/>
        <Route path ="/docket_inp2" component={Finalinp2}/>
        <Route path ="/docket_inp3" component={Finalinp3}/>
        <Route path ="/view_user" component={Viewuser}/>
        <Route path ="/docket_inp4" component={Finalinp4}/>
        <Route path ="/staff_view" component={Ttstaff}/>
        <Route path ="/staff_viewuser" component={Viewhead}/>
        <Route path = "/tutor_view" component={Ttviewusr}/>
        </Switch> </> </Router>
        </Provider>
        </>
    );
}