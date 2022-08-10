import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};

/*  
  reducer function() differ in terms of redux
  1. reducer receive every single action that gets dispatched ever will pass to every reducer
   but in react-reducer it will only dispatch to func who use useReducer Hooks

  2. in default case we return current_state again  


*/
