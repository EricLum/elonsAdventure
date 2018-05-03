import React from 'react'

export default class Car extends React.Component {

  render(){
      return (<img src='tesla.png' alt='car' height='100px'
        style={{position: "absolute", top: this.props.topPosition, left: 0}}
        tabIndex="0"></img>)
  }

}
