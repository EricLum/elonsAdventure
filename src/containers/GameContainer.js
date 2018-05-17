import React from 'react'
import Car from '../components/Car'
import Laser from '../components/Laser'
import Enemy from '../components/Enemy'
export default class GameContainer extends React.Component {

    state = {
      carVerticalPosition: 0,
      projectile: []
    }

    handleFireLasers = (e) => {
      e.persist()
      if (e.key == " ") {
        this.setState(prevState => {
          return {
            projectile: [...prevState.projectile, (<Laser left='100' top={this.state.carVerticalPosition} />)]
          }
        })
      }
    }

    handleCarMovement = (e) => {
      e.persist()
      let projectile = null
      let stepSize = 0;

      switch(e.key){
        case 'ArrowDown':
          stepSize = 100;
          break;
        case 'ArrowUp':
          stepSize = -100
          break;
        default:
          break;
      }

      this.setState((prevState) => {
        return {
          carVerticalPosition: Math.max(Math.min(prevState.carVerticalPosition + stepSize, 600), 0)
        }
      })
    }

    render(){
      return(
        <div onKeyPress={this.handleFireLasers} onKeyDown={this.handleCarMovement} >
          <Car topPosition={this.state.carVerticalPosition}/>
          {this.state.projectile}
          <Enemy />
        </div>
      )
    }
}
