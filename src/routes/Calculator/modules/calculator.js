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
        return initialState
      case 'CE':
        if (state.equation) {
          return initialState
        } else if (state.secondInput) {
          return {...state, userInput: 0, secondInput: 0}
        } else if (state.operator) {
          return {...state, userInput: 0, operator: null}
        } else {
          return {...state, userInput: 0, firstInput: 0}
        }
      case '0':
        if (state.firstInput === 0) return state
      case '+':
      case '-':
      case '*':
      case '/':
        if (state.equation) {
          return {...state, userInput: payload, firstInput: state.equation, operator: payload, secondInput: 0, equation: null}
        }
        return {...state, userInput: payload, operator: payload}
      case '=':
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
          default:
            return {
              ...state,
              equation: state.firstInput
            }
        }
      case '.':
        if (state.firstInput === 0) {
          return {...state, userInput: 0 + payload, firstInput: state.firstInput + payload}
        } else if (!state.operator && state.firstInput.indexOf('.') === -1) {
          return {...state, userInput: state.userInput + payload, firstInput: state.firstInput + payload}
        } else if (state.secondInput === 0) {
          return {...state, userInput: 0 + payload, secondInput: state.secondInput + payload}
        } else if (state.secondInput.indexOf('.') === -1) {
          return {...state, userInput: state.userInput + payload, secondInput: state.secondInput + payload}
        } else {
          return state
        }
      default:
        if (state.equation) {
          return {...state, userInput: payload, firstInput: payload, operator: null, secondInput: 0, equation: null}
        } else if (state.firstInput === 0) {
          return {...state, userInput: payload, firstInput: payload}
        } else if (state.operator && state.secondInput) {
          return {...state, userInput: state.userInput + payload, secondInput: state.secondInput + payload}
        } else if (state.operator) {
          return {...state, userInput: payload, secondInput: payload}
        } else {
          return {...state, userInput: state.userInput + payload, firstInput: state.firstInput + payload}
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
  secondInput: 0,
  equation: null,
}

const counterReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export default counterReducer
