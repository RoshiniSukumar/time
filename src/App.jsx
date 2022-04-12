import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './components/login/signin'
import Register from './components/signup/register'
import Admin from './components/admin/admin'
import Manages from './components/admin/manage'
import Views from './components/view/views'
import Home from './components/home/home'
import Front from './components/timetable/front'
import Docket2 from './components/timetable/docket2'
// import Hello from './components/Hello';
// import Creates from './components/timetable/Creates';
export default function App() {

// if(0===0)
// {
    // return <Creates/>
// }
    return (

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




        </Switch> </> </Router>
    );
}