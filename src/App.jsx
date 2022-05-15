import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from "react-redux"
import Viewuser from "./components/view/viewuser"
import SignIn from './components/login/signin'
import Register from './components/signup/register'
import Admin from './components/admin/admin'
import Stafflist from "./components/admin/stafflist"
import Clslist from "./components/admin/clslist"
import Corelist from "./components/admin/corelist"
import Alliedlist from "./components/admin/alliedlist"
import Manages from './components/admin/manage'
import Views from './components/view/views'
import Home from './components/home/home'
import Front from './components/timetable/front'
import Docket2 from './components/timetable/docket2'
import Finalinp from './components/timetable/finalinp';
import {store} from "./redux/store"
 import Finalinp2 from "./components/timetable/finalinp2"
 import Finalinp3 from "./components/timetable/finalinp3"
export default function App() {

 
    return (
<>
<Provider store={store}>
        <Router basename = "/tt" >

        <>
        <  Switch >
        <
        Route exact path = "/"
        component = { Home }
        />  <
        Route path = "/create_docket"
        component = { Front }
        />  <
        Route path = "/signin"
        component = { SignIn }
        />  <
        Route path = "/manage_account"
        component = { Manages }
        /> 
         <
        Route path = "/admin"
        component = { Admin }
        />  
        <
        Route path = "/register"
        component = { Register }
        />  <Route path = "/view_docket"
        component = { Views }/> 
        <Route path="/create_docket2" component={Docket2} />
        <Route path ="/stafflist" component={Stafflist}/>
        <Route path ="/clslist" component={Clslist}/>
        <Route path ="/corelist" component={Corelist}/>
        <Route path ="/alliedlist" component={Alliedlist}/>
        <Route path ="/docket_inp" component={Finalinp}/>
        <Route path ="/docket_inp2" component={Finalinp2}/>
        <Route path ="/docket_inp3" component={Finalinp3}/>
        <Route path ="/view_user" component={Viewuser}/>
    
        </Switch> </> </Router>
        </Provider>
        </>
    );
}