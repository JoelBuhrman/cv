import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'

import Header from './components/header/Header'
import FirstPage from './components/firstpage/FirstPage'
import JoelBuhrman from './components/joelbuhrman/JoelBuhrman'
import Grades from './components/grades/Grades'
import Resume from './components/resume/Resume'



const App = () => (
  <Router>
    <div className="App">
      <Header/>
      <Route exact path="/" component={FirstPage} />
      <Route path="/aboutme" component={JoelBuhrman} />
      <Route path="/grades" component={Grades} />
      <Route path="/resume" component={Resume} />
    </div>
  </Router>
)

export default App
