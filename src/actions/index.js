import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
 } from './types';
import firebase from 'firebase';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    loginUserStart(dispatch);
    console.log('loginUser:','email: '+email,'password: '+password)
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch( (error) => {
        console.log(error);
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch( () => loginUserFail(dispatch));
      });
  }
}

const loginUserStart = (dispatch) => {
  dispatch({
    type: LOGIN_USER_START
  });
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  });
}
