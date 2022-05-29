import {
  FETCH_USERS,
  FETCH_USERS_FULLFILLED,
  FETCH_USERS_REJECTED,
  LOCALDATA
} from "../constant/constant";

const initialState = {
  loading: false,
  error: "",
  data: [],
  localData: ""
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_FULLFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ""
      };
    case FETCH_USERS_REJECTED:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload
      };
    case LOCALDATA: {
      console.log("reducer local datat", action.payload);
      return {
        ...state,
        localData: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
