import React from 'react'

class Laser extends React.Component {

  state = {
    top: 0,
    left: 0
  }

  componentDidMount(){
    //take whatever props we get and set them to state
    this.setState({
      top: this.props.top,
      left: this.props.left
    })

    setInterval( () => this.tick(), 1000)
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
