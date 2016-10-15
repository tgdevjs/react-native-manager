import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: ''
};

export default email = (state=INITIAL_STATE, action) => {
  console.log('authreducer: action: ',action);
  switch(action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload}
    default:
      return state;
  }
}
