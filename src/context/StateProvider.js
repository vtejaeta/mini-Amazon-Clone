import React, { createContext, useContext, useReducer } from "react";

//provides the dataLayer
export const StateContext = createContext();

//wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull information from datalayer
export const useStateValue = () => useContext(StateContext);
