import {
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
  UPDATE_EMAIL,
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
  UPDATE_TEL,
  UPDATE_ADDRESS,
  UPDATE_CITY,
  UPDATE_STATE,
  UPDATE_ZIP
} from '../Actions/actionTypes.js';

import {
  updateUserName, updatePassword, updateEmail,
  updateFirstName, updateLastName, updateTel,
  updateAddress, updateCity, updateState, updateZip
} from '../actionCreators.js';

const initialState = {
  username: '',
  password: '',
  email: '',
  first_name: '',
  last_name: '',
  tel: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  logged_in: false
};

export default function onBoardApp (state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME: 
      return Object.assign({}, state, {
        username: action.text
      });

    case UPDATE_PASSWORD:
      return Object.assign({}, state, {
        password: action.text
      });

    case UPDATE_EMAIL:
      return Object.assign({}, state, {
        email: action.text
      });

    case UPDATE_FIRST_NAME:
      return Object.assign({}, state, {
        first_name: action.text
      });

    case UPDATE_LAST_NAME:
      return Object.assign({}, state, {
        last_name: action.text
      });

    case UPDATE_TEL:
      return Object.assign({}, state, {
        tel: action.text
      });

    case UPDATE_ADDRESS:
      return Object.assign({}, state, {
        address: action.text
      });

    case UPDATE_CITY:
      return Object.assign({}, state, {
        city: action.text
      });

    case UPDATE_STATE:
      return Object.assign({}, state, {
        state: action.text
      });

    case UPDATE_ZIP:
      return Object.assign({}, state, {
        zip: action.text
      });

    default:
      return state;
  
  }

};