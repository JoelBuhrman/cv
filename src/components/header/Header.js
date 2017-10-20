import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './styles/styles.css'
import $ from 'jquery'

export default class Header extends Component{

  constructor(){
    super()
    this.state = {
      active: null,
    }
    this.toggleSideBar = this.toggleSideBar.bind(this)
  }

  toggleSideBar(){
    if(this.state.open){
      $('.phone-sidebar').css('width', 0);
      this.setState({
        open: false
      })
    }
    else{
      $('.phone-sidebar').css('width', 200);
      this.setState({
        open: true
      })
    }

  }

  render(){
    return(
      <div>
        <div className="phone-header">
          <i className="fa fa-bars fa-2x" aria-hidden="true" onClick={this.toggleSideBar}/>
        </div>
        <div className="phone-sidebar">

        </div>
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
            <NavLink id="myprojectsheader" to="/myprojects" exact activeClassName="selected" className="link">My projects</NavLink>
          </div>

          {/*<div className="headerComponent">
            <NavLink to="/resume" exact activeClassName="selected" className="link" >Resumé</NavLink>
          </div>*/}

        </div>
      </div>
    )
  }
}
