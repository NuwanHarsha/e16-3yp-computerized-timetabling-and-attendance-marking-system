import React, { Component } from 'react';
import {Route,BrowserRouter as Router,Switch} from "react-router-dom";
import Home from "../pages/home"
import Login from "../pages/login"
import StdReg from '../pages/stdReg'
import AdminPanel from '../pages/adminPanel'
import DeleteAccounts from '../pages/deleteAccounts' 
import LecReg from '../pages/lecReg'
import AdminReg from '../pages/adminReg'
import LecturerDashboard from '../pages/lecturerDashboard'
import StudentGroups from '../pages/studentGroups'
import EditGroups from '../pages/editGroups'
import '../index.css'

class App extends Component {

    state = {}
  
    render() { 
        return ( 
            <Router>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/stdreg" component={StdReg}></Route>
                    <Route path="/adminpanel" component={AdminPanel}></Route>
                    <Route path="/deleteaccounts" component={DeleteAccounts}></Route>
                    <Route path="/lecreg" component={LecReg}></Route>
                    <Route path="/adminreg" component={AdminReg}></Route>
                    <Route path="/Lecturerdashboard" component={LecturerDashboard}></Route>
                    <Route path="/studentgroups" component={StudentGroups}></Route>
                    <Route path="/editgroups/:id" component={EditGroups}></Route>
                    <Route path="/" component={Login}></Route>
                    
                </Switch>
            </Router>
         );
    }

}
 
export default App; 