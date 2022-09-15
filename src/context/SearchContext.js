import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    city: undefined,
    dates:[],
    options:{
        adult: undefined,
        children: undefined,
        room: undefined,
    }

};

// context creation
export const SearchContext = createContext(INITIAL_STATE);

// reducer function 

const SearchReducer = (state,action) =>{
    switch (action.type) {
        case "NEW_SEARCH":
          return action.payload;
        case "RESET_SEARCH":
          return INITIAL_STATE;
        default:
          return state;
      }

};

// Context provider 
export const SearchContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(SearchReducer,INITIAL_STATE);

}