// import { useState } from 'react'


// `value` is inferred as a string
// `setValue` is inferred as (newValue: string) => void
// const [value, setValue] = useState('')

export type User = {
   email: string;
   id: string;
}
   
// the generic is the < >
// the union is the User | null
// together, TypeScript knows, "Ah, user can be User or null".
// const [user, setUser] = useState<User | null>(null);

type AppState = {};
type Action =
  | { type: "SET_ONE"; payload: string }
  | { type: "SET_TWO"; payload: number };
 
export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_ONE":
      return {
        ...state,
        one: action.payload // `payload` is string
      };
    case "SET_TWO":
      return {
        ...state,
        two: action.payload // `payload` is number
      };
    default:
      return state;
  }
}