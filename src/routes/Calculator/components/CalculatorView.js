import React from 'react'
import PropTypes from 'prop-types'
import '../styles/CalculatorView.scss'

import EquationDisplay from '../../EquationDisplay/components/EquationDisplayView'
import Button from '../../Button/components/ButtonView'

const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'AC', 'CE', '/', '*', '-', '+', '=']

export const Calculator = (props) => (
  <div id='calculator'>
    <h3 className='title'>Electronic Calculator</h3>
      <EquationDisplay />
      {buttons.map((button) => {
        return <Button key={button} button={button} />
      })}
  </div>
)

Calculator.propTypes = {

}

export default Calculator
