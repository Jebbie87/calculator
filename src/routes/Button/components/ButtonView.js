import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/ButtonView.scss'

export default class Button extends Component {
  handleClick = (e) => {
    // update userInput and equation with button click
    // if AC is clicked, clear reset everything
    // if CE is clicked, clear the last input and set userInput back to 0

    this.props.buttonClick(e.target.value)
  }

  render() {
    return (
      <button
        value={this.props.button}
        className={`button-view ${this.props.button === '=' ? 'equal' : this.props.button === 0 ? 'zero' : this.props.button}`}
        onClick={this.handleClick}
      >{this.props.button === '/' ? '÷' : this.props.button === '*' ? 'x' : this.props.button}
      </button>
    )
  }
}
  
Button.propTypes = {
}
