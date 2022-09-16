import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    user:null,
    loading:false,
    error:null

};

// context creation
export const AuthContext = createContext(INITIAL_STATE);

// reducer function 

const AuthReducer = (state,action) =>{
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

    return (
        <SearchContext.Provider 
          value={{
            city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch,
          }}
        >
            {children}
        </SearchContext.Provider>
    )

}