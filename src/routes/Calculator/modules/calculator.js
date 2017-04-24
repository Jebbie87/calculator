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
        return {state, userInput: 0, equation: 0}
      case 'CE':
        console.log('ce')
        return {...state, userInput: 0}
      case '0':
        console.log('0')
        // will not add 0 if user has not put in anything
        if (state.equation === 0) return state
      case '=':
        console.log('=')
        let checkSecondEqualPress = eval(state.equation.split('=')[0])

        if (parseFloat(state.userInput) === checkSecondEqualPress) {
          console.log('second equal')
          return state
        }

        return {state, userInput: eval(state.equation), equation: `${state.equation}=${eval(state.equation)}`}
      default:
        console.log('default')
        if (state.equation === 0) {
          return {state, userInput: payload, equation: payload}
        }

        return {state, userInput: payload, equation: state.equation + payload}
    }
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  userInput: 0,
  equation: 0
}

const counterReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

export default counterReducer
