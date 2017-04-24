import React from 'react'
// import PropTypes from 'prop-types'
import '../styles/EquationDisplayView.scss'

export const Equation = (props) => (
  <div className='equation-display'>
    <h3>{props.userInput}</h3>
    <p>
      {props.firstInput}
      {props.operator ? props.operator : ''}
      {props.secondInput ? props.secondInput : ''}
      {props.equation ? `=${props.equation}` : ''}
    </p>
  </div>
)

Equation.propTypes = {

}

export default Equation
