import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

// state

const initialState = {
  leftFactor: undefined,
  rightFactor: undefined,
  winningStreak: 0,
  results: undefined, // [ { leftFactor, rightFactor, answer }]
}

// actions

export function nuevamultiplicacion() {
    const rand = () => Math.floor( Math.ramdon() * 10) + 1
    
  return { type: "NUEVAMULTIPLICACION",
  payload: {
  leftFactor: rand (),
  rightFactor: rand (),}
 }
}

export function respuesta (number) {

    return {type: "respuesta", payload : number}

}

// reducer

function reducer(state, action) {

    if (action.type === "NUEVAMULTIPLICACION"){
        return {
          ...initialState,
          leftFactor: action.payload,
          rightFactor: action.payload,
        
        }
      }
  return state
}

// store

const store = createStore(reducer, initialState, composeWithDevTools());

export default store