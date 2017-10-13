import React, {Component} from 'react'
import Picture from './Picture'
import Links from './Links'
import './styles/styles.css'
import Grades from '../grades/Grades'
import MyProjects from '../myprojects/MyProjects'
import $ from "jquery"


class FirstPage extends Component {

  constructor(){
    super()

  }

  componentDidMount(){
    var y = $('#firstPage').scrollTop();  //your current y position on the page
    //$('#firstPage').scrollTop(y+150);

    const path = window.location.pathname
    switch (path) {
      case '/grades':
        $("#firstPage").animate({ scrollTop: "670px" })
        //$('#firstPage').scrollTop(670, 1000);
        break;
      case '/myProjects':
        $("#firstPage").animate({ scrollTop: "2500px" })
        break;
      default:
        $("#firstPage").animate({ scrollTop: "0px" })
    }

  }


  render(){
    return(
      <div className="firstPage" id="firstPage">
        <Picture />
        <div className="description">
          My name is Joel Buhrman. I'm a driven student currently studying my last year of the Civilengineeringprogram of Information & Communication at Faculty of Engineering, LTH. Now I'm searching for my new challenges to take on after my graduation. Welcome to my webpage.
        </div>
        <Links />
        <Grades />
        <MyProjects />
      </div>
    )
  }
}

export default FirstPage
