import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from "./components/navbar.component"
import ViewComments from "./components/comments-list.component";
import HomePage from "./components/HomePage.component.js";
import CreateComments from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";



function App() {
 return (
   <Router>
   <div className="container">
     <Sidebar />
     <br/>
     <Route path = "/" exact component = {HomePage}/>
     <Route path = "/view" component = {ViewComments}/>
     <Route path = "/create" component = {CreateComments}/>
     <Route path = "/user" component = {CreateUser}/>
     <Route path = "/signIn" component = {CreateUser}/>

   </div>
   </Router>
 );
}
 
export default App;