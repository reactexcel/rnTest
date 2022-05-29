import {
  FETCH_USERS,
  FETCH_USERS_FULLFILLED,
  FETCH_USERS_REJECTED,
  LOCALDATA
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

export const fetchLocalData = data => {
  return {
    type: LOCALDATA,
    payload: data
  };
};
