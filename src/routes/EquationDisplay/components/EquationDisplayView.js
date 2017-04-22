import React from 'react'
// import PropTypes from 'prop-types'
import '../styles/EquationDisplayView.scss'

export const Equation = (props) => (
  <div className='equation-display'>
    <h3>{props.userInput}</h3>
    <p>{props.equation}</p>
  </div>
)

Equation.propTypes = {

}

Equation.defaultProps = {
  userInput: 0,
  equation: 0
}

export default Equation
