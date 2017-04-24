// ------------------------------------
// Constants
// ------------------------------------
export const BUTTON_CLICKED = 'BUTTON_CLICKED'

// ------------------------------------
// Actions
// ------------------------------------
export const buttonClick = (value) => {
  return {
    type    : BUTTON_CLICKED,
    payload : value,
  }
}

export const actions = {
  buttonClick
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [BUTTON_CLICKED] : (state, { payload }) => {
    switch(payload) {
      case 'AC':
        console.log('ac')
        return {
          ...state,
          userInput: 0,
          firstInput: 0,
          operator: null,
          secondInput: 0
        }
      case 'CE':
        console.log('ce')
        return {...state, userInput: 0}
      case '0':
        console.log('0')
        if (state.firstInput === 0) return state
      case '+':
      case '-':
      case '*':
      case '/':
        if (state.equation) {
          return {...state, userInput: payload, firstInput: state.equation, operator: payload, secondInput: null, equation: null}
        }
        return {...state, userInput: payload, operator: payload}
      case '=':
        console.log('=')
        switch(state.operator) {
          case '+':
            return {
              ...state,
              userInput: `${parseFloat(state.firstInput) + parseFloat(state.secondInput)}`,
              equation: `${parseFloat(state.firstInput) + parseFloat(state.secondInput)}`
            }
          case '-':
            return {
              ...state,
              userInput: `${parseFloat(state.firstInput) - parseFloat(state.secondInput)}`,
              equation: `${parseFloat(state.firstInput) - parseFloat(state.secondInput)}`
            }
          case '*':
            return {
              ...state,
              userInput: `${parseFloat(state.firstInput) * parseFloat(state.secondInput)}`,
              equation: `${parseFloat(state.firstInput) * parseFloat(state.secondInput)}`
            }
          case '/':
            return {
              ...state,
              userInput: `${parseFloat(state.firstInput) / parseFloat(state.secondInput)}`,
              equation: `${parseFloat(state.firstInput) / parseFloat(state.secondInput)}`
            }
        }
      default:
        console.log('default')
        if (state.equation) {
          return {...state, userInput: payload, firstInput: state.equation, secondInput: null, equation: null}
        } else if (state.firstInput === 0) {
          return {...state, userInput: payload, firstInput: payload}
        } else if (state.operator && state.secondInput) {
          return {...state, userInput: payload, secondInput: state.secondInput + payload}
        } else if (state.operator) {
          return {...state, userInput: payload, secondInput: payload}
        } else {
          return {...state, userInput: payload, firstInput: state.firstInput + payload}
        }
    }
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  userInput: 0,
  firstInput: 0,
  operator: null,
  secondInput: null,
  equation: null,
}

const counterReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export default counterReducer
