import { createContext } from "react";

const INITITAL_STATE = {
    city: undefined,
    dates:[],
    options:{
        adult: undefined,
        children: undefined,
        room: undefined,
    }

};

// context creation
export const SearchContext = createContext(INITITAL_STATE);