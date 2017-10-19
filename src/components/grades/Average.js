import React, {Component} from 'react'
import $ from 'jquery'

let interval = null
export default class Average extends Component{


  constructor(){
    super()
    this.state= {
      value: 0.1,
    }

    this.increaseValue = this.increaseValue.bind(this)
  }

  increaseValue(){
    if(this.state.value*1.03 >= 4.56){
      this.setState({
        value: 4.56
      })
    }
    else{
      this.setState({
        value: this.state.value *1.03
      })
    }

  }


  componentDidMount(){
    let iv= this.increaseValue
    if(window.location.pathname === '/grades'){
      interval = setInterval(iv, 20);
    }
    $( "#firstPage" ).scroll(function() {
      let y = $('#firstPage').scrollTop();
      switch (true) {
        case y>10 && !interval:
          interval = setInterval(iv, 20);
          break;
        default:
        break;
      }
    });
  }


  render(){

    if(this.state.value >= 5){
      clearInterval(interval)
    }

    return(
      <div className="average rightBorder">
        <span className="avg">{this.state.value.toFixed(2)}</span> <br/>
        AVERAGE
      </div>

    )
  }
}
