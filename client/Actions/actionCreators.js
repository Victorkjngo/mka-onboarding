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
} from './actionTypes.js';

export function updateUserName (text) {
  return { type: UPDATE_USERNAME, text: text };
};

export function updatePassword (text) {
  return { type: UPDATE_PASSWORD, text: text };
};

export function updateEmail (text) {
  return { type: UPDATE_EMAIL, text: text };
};

export function updateFirstName (text) {
  return { type: UPDATE_FIRST_NAME, text: text };
};

export function updateLastName (text) {
  return { type: UPDATE_LAST_NAME, text: text };
};

export function updateTel (text) {
  return { type: UPDATE_TEL, text: text };
};

export function updateAddress (text) {
  return { type: UPDATE_ADDRESS, text: text };
};

export function updateCity (text) {
  return { type: UPDATE_CITY, text: text };
};

export function updateState (text) {
  return { type: UPDATE_STATE, text: text };
};

export function updateZip (text) {
  return { type: UPDATE_ZIP, text: text };
};
