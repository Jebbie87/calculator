import React from 'react'
import PropTypes from 'prop-types'
import '../styles/CalculatorView.scss'

import EquationDisplay from '../../EquationDisplay/components/EquationDisplayView'
import Button from '../../Button/components/ButtonView'

const buttons = ['AC', 'CE', '/', '*', 7, 8, 9, '-', 4, 5, 6, '+', 1, 2, 3, 0, '.', '=']

export const Calculator = (props) => (
  <div id='calculator'>
    <h3 className='title'>React-Redux Electronic Calculator</h3>
      <EquationDisplay
        userInput={props.userInput}
        firstInput={props.firstInput}
        operator={props.operator}
        secondInput={props.secondInput}
        equation={props.equation}
       />
      {buttons.map((button) => {
        return <Button key={button} button={button} buttonClick={props.buttonClick} />
      })}
  </div>
)

Calculator.propTypes = {

}

export default Calculator
