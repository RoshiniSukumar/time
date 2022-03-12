import './App.css';
import React from "react";
import SignIn from './components/login/signin'
import Register from './components/signup/register'
// import Admin from './components/admin/admin'
import Manages from './components/admin/manage'
// import {BrowserRouter,Route,Switch} from "react-router-dom"
export default function App() {
  return (
    <div>
   {/* <BrowserRouter basename="/tt"> */}
      {/* <Route exact path="/" component={Admin} /> */}
{/* <Switch> */}
{/* <Route exact path ="/"> */}
<Manages/></div>
// {/* </Route> */}
// <Route exact path ="/login">
// <SignIn />
// </Route>
// <Route exact path ="/register">
// <Register/>
// </Route>
// </Switch>
      
//       </BrowserRouter>
  );
}



    
        
        
        
         
      
    
  