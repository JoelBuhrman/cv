import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './styles/styles.css'

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
          <Link to="/" className="link" >Joel Buhrman</Link>
        </div>
        <div className="headerComponent">
          <Link to="/aboutMe" className="link">About Me</Link>
        </div>
        <div className="headerComponent">
          <Link to="/grades" className="link" >Grades</Link>
        </div>
        <div className="headerComponent">
          <Link to="/resume" className="link" >Resumé</Link>
        </div>
      </div>
    )
  }
}
