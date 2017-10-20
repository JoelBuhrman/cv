import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'

import Header from './components/header/Header'
import FirstPage from './components/firstpage/FirstPage'
import Grades from './components/grades/Grades'
import Resume from './components/resume/Resume'
import MyProjects from './components/myprojects/MyProjects'



const App = () => (
  <Router>
    <div className="App">
      <Header/>
      <Route exact path="/" component={FirstPage} />
      <Route path="/grades" component={FirstPage} />
      <Route path="/resume" component={FirstPage} />
      <Route path="/myprojects" component={FirstPage} />
    </div>
  </Router>
)

export default App
