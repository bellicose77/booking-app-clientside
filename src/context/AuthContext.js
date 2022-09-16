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
        case "LOGIN_START":
          return {
            user: null,
            loading: true,
            error: null,
          };
        case "LOGIN_SUCCESS":
          return {
            user: action.payload,
            loading: false,
            error: null,
          };
        case "LOGIN_FAILURE":
            return {
                user: null,
                loading: false,
                error: action.payload,
            };
        case "LOGOUT":
            return {
                user:null,
                loading:false,
                error:null
            }
        default:
          return state;
      }

};

// Context provider 
export const AuthContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);

    return (
        <AuthContext.Provider 
          value={{
            user: state.user,
            loading: state.loading,
            error: state.error,
            dispatch,
          }}
        >
            {children}
        </AuthContext.Provider>
    )

}