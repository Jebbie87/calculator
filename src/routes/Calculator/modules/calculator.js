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
        break;
      default:
        return {...state, userInput: payload, equation: state.equation + payload}
        break
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
