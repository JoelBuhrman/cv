import React, {Component} from 'react'
import $ from 'jquery'

let interval = null
let interval2 = null
export default class Average extends Component{


  constructor(){
    super()
    this.state= {
      value: 1
    }

    this.increaseValue = this.increaseValue.bind(this)
    this.increaseValueSecond = this.increaseValueSecond.bind(this)
  }

  increaseValueSecond(){
    if(this.state.value*1.04 >= 242.5){
      this.setState({
        value: 242.5
      })
    }
    else{
      this.setState({
        value: this.state.value *1.04
      })
    }
  }

  increaseValue(){
    interval2 = setInterval(this.increaseValueSecond, 20)
    clearInterval(interval)

  }



  componentDidMount(){
    let iv= this.increaseValue
    $( "#firstPage" ).scroll(function() {
      let y = $('#firstPage').scrollTop();
      switch (true) {
        case y>10 && !interval:
          interval = setInterval(iv, 100);
          break;
        default:
        break;
      }
    });

  }


  render(){

    if(this.state.value >= 240){
      clearInterval(interval2)
    }

    return(
      <div className="hp">
        <span className="avg">{Math.round(this.state.value)}</span> <br/>
        CREDITS
      </div>

    )
  }
}
