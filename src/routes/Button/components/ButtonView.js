import React from 'react'
import PropTypes from 'prop-types'
import '../styles/ButtonView.scss'

export const Button = (props) => (
  // const style = (props.button === 'AC' || props.button === 'CE') ? 'red' : ''
  <div className={`button-view ${
    (props.button === 'AC' || props.button === 'CE')
      ? 'red'
      : props.button === 0
      ? 'zero'
      : props.button === '='
      ? 'equal'
      : ''
    }`}>
    <button value={props.button}>{props.button}</button>
  </div>
)

Button.propTypes = {

}

export default Button

// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import '../styles/ButtonView.scss'

// export default class Button extends Component {
//   render() {
//     return (
//       <div className='button-view'>
//         <button value={this.props.button}>{this.props.button}</button>
//       </div>
//     )
//   }
// }

// // Button.propTypes = {

// // }

// // export default Button
