import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  data: number;
};

const initialState: CounterState = {
  data: 1,
};


export const counterslice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: CounterState, action: { payload: number }) => {
            state.data += action.payload;
        },
        decrement: (state: CounterState, action: { payload: number }) => {
            state.data -= action.payload;
        }
    }
})


//
export const { increment, decrement } = counterslice.actions;


export function incrementLegacy(amount = 1) {
  return { type: "increment", payload: amount };
}

export function decrementLegacy(amount = 1) {
  return { type: "decrement", payload: amount };
}

// export function increment(amount = 1) {
//   return { type: "increment", payload: amount };
// }

// export function decrement(amount = 1) {
//   return { type: "decrement", payload: amount };
// }

export default function counterReducer(
  state = initialState,
  action: { type: string; payload: number }


) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        data: state.data + action.payload,
      };
    case "decrement":
      return {
        ...state,
        data: state.data - action.payload,
      };
    default:
      break;
  }
  return state;
}
