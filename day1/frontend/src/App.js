import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './component/home'
import {BrowserRouter as Router , Link ,Switch,Route} from 'react-router-dom'
import AddStudents from './component/addStudents'
import EditStudent from './component/editStudent'
function App() {
  return (
    <div className="App">
      <Router>
  <Navbar />
  <Switch>
    <Route path="/AddStudents/">
      <AddStudents />
    </Route>
    <Route path="/EditStudent/:_id">
      <EditStudent />
    </Route>
  <Home  />
  </Switch>
  </Router>
    </div>
  );
}

export default App;
