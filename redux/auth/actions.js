import { FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from "./constants";


export const fetchUserSuccess = (data) => ({
  type: FETCH_USER_SUCCESS,
  payload: data,
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});