import React from 'react'
import PropTypes from 'prop-types'
import '../styles/CalculatorView.scss'

import EquationDisplay from '../../EquationDisplay/components/EquationDisplayView'

export const Calculator = (props) => (
  <div id='calculator'>
    <h3 className='title'>Electronic Calculator</h3>
      <EquationDisplay />
  </div>
)

Calculator.propTypes = {

}

export default Calculator
