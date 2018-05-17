import React, {Component} from 'react'

export default class Enemy extends Component {

  render(){
    return(
      <div style={{position:'absolute',height: '100px',width: '100px', background: 'red', top: '200px', left: '400px'}}>
      </div>
    )
  }
}
