import React, {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mangoCount: 0,
      bananaCount: 0,
    }
  }

  handleEatMango = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
    }))
  }

  handleEatBanana = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="fruits-counter-container">
        <h1>
          Bob ate {mangoCount} mangoes {bananaCount} bananas
        </h1>
        <div className="button-container">
          <button className="eat-button" onClick={this.handleEatMango}>
            Eat Mango
          </button>
          <button className="eat-button" onClick={this.handleEatBanana}>
            Eat Banana
          </button>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            alt="mango"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            alt="banana"
          />
        </div>
      </div>
    )
  }
}

export default FruitsCounter
