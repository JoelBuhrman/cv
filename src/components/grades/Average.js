import React, {Component} from 'react'

let interval = null
export default class Average extends Component{


  constructor(){
    super()
    this.state= {
      value: 0.1
    }

    this.increaseValue = this.increaseValue.bind(this)
  }

  increaseValue(){
    if(this.state.value*1.03 >= 4.7){
      this.setState({
        value: 4.7
      })
    }
    else{
      this.setState({
        value: this.state.value *1.03
      })
    }

  }


  componentDidMount(){
    interval = setInterval(this.increaseValue, 20);
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
