import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/ButtonView.scss'

export default class Button extends Component {
  handleClick = (e) => {
    console.log(e.target.value)
  }

  render() {
    return (
        <button
          value={this.props.button}
          className={`button-view ${this.props.button === '=' ? 'equal' : this.props.button === 0 ? 'zero' : this.props.button}`}
          onClick={this.handleClick}
        >{this.props.button === '/' ? '÷' : this.props.button === '*' ? 'x' : this.props.button}</button>
    )
  }
}
  
Button.propTypes = {
  button: PropTypes.node.isRequired
}

          // className={`button-view
          //   ${(this.props.button === 'AC' || this.props.button === 'CE')
          //   ? 'red'
          //   : this.props.button === 0
          //   ? 'zero'
          //   : this.props.button === '='
          //   ? 'equal'
          //   : ''}`}
