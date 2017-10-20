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

    this.changeLink = this.changeLink.bind(this)
    this.changeHeader = this.changeHeader.bind(this)
  }

  changeLink(param){
    let newLink = param === 'aboutme' ? '' : param
    window.history.pushState('page2', 'Title', '/'+newLink);
    let headerComponents = document.getElementsByClassName("link")
    for(let i = 0; i<headerComponents.length; i++){
      headerComponents[i].classList.remove('selected')
    }
    var el = document.getElementById(param+"header");
    el.classList.add('selected')
  }

  changeHeader(y){
    $('.header').css('height', 100-y/2);
    $('.header').css('background', 'rgba(100, 100, 100,'+y/400 +')');
    $('.headerComponent').css('margin-top', 40-y/4);
    $('.firstPage').css('height', 'calc(100vh - 100px + '+y+'px)' );

  }



  componentDidMount(){
    const path = window.location.pathname
    const changeLink= (param) => this.changeLink(param)
    const changeHeader = this.changeHeader

    switch (path) {
      case '/grades':
        $("#firstPage").scrollTop(715);
        changeLink('grades')
        //this.changeHeader(80)
        //$('#firstPage').scrollTop(670, 1000);
        break;
      case '/myprojects':
        $("#firstPage").scrollTop(2500);
        changeLink('myprojects')
        //this.changeHeader(80)
        break;
      default:
        $("#firstPage").scrollTop(0)
        changeLink('aboutme')
      //  this.changeHeader(0)
    }

    $( "#firstPage" ).scroll(function() {
      let y = $('#firstPage').scrollTop();
      switch (true) {
        case y<=80:
          //changeHeader( y)
          break;
        case y<705 && window.location.pathname !== '/':
          changeLink('aboutme')
          break;
        case y>=705 && y< 1270 && window.location.pathname !== '/grades':
          changeLink('grades')
          break;
        case y>=1270 && window.location.pathname !== '/myprojects':
          changeLink('myprojects')
          break;
        default:

      }

    });


  }
  componentWillReceiveProps(nextProps) {
    const path = window.location.pathname
    const changeLink= (param) => this.changeLink(param)
    switch (path) {
      case '/grades':
        $("#firstPage").scrollTop(630);
        changeLink('grades')
        //this.changeHeader(80)
        //$('#firstPage').scrollTop(670, 1000);
        break;
      case '/myprojects':
        $("#firstPage").scrollTop(2500);
        changeLink('myprojects')
        //this.changeHeader(80)
        break;
      default:
        $("#firstPage").scrollTop(0)
        changeLink('aboutme')
      //  this.changeHeader(0)
    }
  }

  render(){
    return(
      <div className="firstPage" id="firstPage">
        <Picture />
        <div className="description">
          My name is Joel Buhrman. I'm person who loves to visualise and create. <br/>
          I'm currently studying my last year of the Civilengineeringprogram of Information & Communication at Faculty of Engineering, LTH. Now I'm searching for my new challenges to take on after my graduation. Welcome to my webpage.

        </div>
        <Links />
        <Grades />
        <MyProjects />
      </div>
    )
  }
}

export default FirstPage
