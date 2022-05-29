import {
  FETCH_USERS,
  FETCH_USERS_FULLFILLED,
  FETCH_USERS_REJECTED,
  FETCH_USER_INPUT_TEXT
} from "../constant/constant";

const initialState = {
  loading: false,
  error: "",
  data: [],
  inputText: ""
};

const reducer = (state = initialState, action) => {
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
    case FETCH_USER_INPUT_TEXT: {
      console.log("reducer local datat", action.payload);
      return {
        ...state,
        inputText: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
