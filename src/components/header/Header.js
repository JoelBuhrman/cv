import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './styles/styles.css'
import Scrollchor from 'react-scrollchor'

export default class Header extends Component{

  constructor(){
    super()
    this.state = {
      active: null,
    }
  }

  render(){
    return(
      <div className="header">
        <div className="headerComponent joelbuhrman">
          <NavLink to="/" className="link" >Joel Buhrman</NavLink>
        </div>
        <div className="headerComponent">
          <NavLink id="aboutmeheader" to="/" exact activeClassName="selected" className="link">About Me</NavLink>
        </div>

      {/*  <div className="headerComponent">
          <NavLink to="/resume" exact activeClassName="selected" className="link" >Master thesis</NavLink>
        </div>*/}
        <div className="headerComponent">
          <NavLink id="gradesheader" to="/grades" exact activeClassName="selected" className="link" >Grades</NavLink>
        </div>
        <div className="headerComponent">
          <NavLink id="myprojectsheader" to="/myProjects" exact activeClassName="selected" className="link">My projects</NavLink>
        </div>

        {/*<div className="headerComponent">
          <NavLink to="/resume" exact activeClassName="selected" className="link" >Resumé</NavLink>
        </div>*/}

      </div>
    )
  }
}
