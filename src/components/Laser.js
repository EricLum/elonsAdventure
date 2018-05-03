import React from 'react'

class Laser extends React.Component {

  state = {
    top: 0,
    left: 0,
    timer: null
  }

  componentDidUpdate(){
    console.log('updating')
    if (parseInt(this.state.left) > 1000){
      clearInterval(this.state.timer)
    }
  }

  componentWillUnMount(){
    clearInterval()
  }

  componentDidMount(){
    //take whatever props we get and set them to state
    let myTimer = setInterval( () => this.tick(), 10)
    this.setState({
      top: this.props.top,
      left: this.props.left,
      timer: myTimer
    })
  }

  tick = () => {
    console.log(this.state.left)
    this.setState( prevState => {
      return {
        left: parseInt(prevState.left) + 50
      }
    })
  }

  render(){
    return (
      <div style={{position: "absolute", top: this.state.top , left: this.state.left }}>
        LASERS
      </div>)
  }
}

export default Laser
