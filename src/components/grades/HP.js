import React, {Component} from 'react'

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
    if(this.state.value*1.03 >= 240){
      this.setState({
        value: 240
      })
    }
    else{
      this.setState({
        value: this.state.value *1.03
      })
    }
  }

  increaseValue(){
    interval2 = setInterval(this.increaseValueSecond, 20)
    clearInterval(interval)

  }



  componentDidMount(){
    interval = setInterval(this.increaseValue, 100);
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
