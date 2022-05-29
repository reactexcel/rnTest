import {
  FETCH_USERS,
  FETCH_USERS_FULLFILLED,
  FETCH_USERS_REJECTED,
  FETCH_USER_INPUT_TEXT
} from "../constant/constant";

export const fetchUsers = () => {
  return {
    type: FETCH_USERS
  };
};

export const fetchUsersFullfilled = data => {
  return {
    type: FETCH_USERS_FULLFILLED,
    payload: data
  };
};

export const fetchUsersRejected = error => {
  return {
    type: FETCH_USERS_REJECTED,
    payload: error
  };
};

export const fetchUserInputText = data => {
  return {
    type: FETCH_USER_INPUT_TEXT,
    payload: data
  };
};
