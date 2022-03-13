import './App.css';
import React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import SignIn from './components/login/signin'
import Register from './components/signup/register'
import Admin from './components/admin/admin'
import Manages from './components/admin/manage'
import Views from './components/view/views'
import Front from './components/timetable/front'
export default function App() {
  return (
    
<Router basename="/tt"> 
     
     <>
<Switch>
<Route exact path ="/create_docket" component={Front}/> 
<Route  path ="/signin" component={SignIn}/> 
<Route  path ="/manage_account" component={Manages}/> 
<Route  path ="/admin" component={Admin}/> 
<Route  path ="/register" component={Register}/> 
<Route  path ="/view_docket" component={Views}/> 




</Switch>
</>
      </Router>
  );
}



    
        
        
        
         
      
    
  