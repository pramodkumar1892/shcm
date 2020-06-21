import {fetch, put} from './../api/httpcliennt';
import get from 'lodash/get';

export const authAction = () => dispatch =>
  dispatch({
    type: 'AUTH',
    data: true,
  });

export const fetchTap = (successCallback, failureCallback) => (dispatch) => {
  const url = 'api/user';
  return fetch(url, {})
    .then(({data}) => {
      if (!data.success) {
        data = [];
      }
      dispatch({
          type: 'USERS',
          data: get(data, 'data', [])
      })
      if (typeof successCallback === 'function') {
        successCallback(get(data, 'data', []));
      }
    })
    .catch(err => {
      if (typeof failureCallback === 'function') {
        failureCallback(err);
      }
      throw err;
    });
};

export const fetchSingleTap = (id, successCallback, failureCallback) => {
  const url = 'api/tap';
  return fetch(`${url}/${id}`, {})
    .then(({data}) => {
      if (!data.success) {
        data = [];
      }
      if (typeof successCallback === 'function') {
        successCallback(get(data, 'data', []));
      }
    })
    .catch(err => {
      if (typeof failureCallback === 'function') {
        failureCallback(err);
      }
      throw err;
    });
};

export const fetchRequests = (successCallback, failureCallback) => {
  const url = 'api/requests';
  return fetch(url, {})
    .then(({data}) => {
      if (!data.success) {
        data = [];
      }
      if (typeof successCallback === 'function') {
        successCallback(get(data, 'data', []));
      }
    })
    .catch(err => {
      if (typeof failureCallback === 'function') {
        failureCallback(err);
      }
      throw err;
    });
};

export const updateUser = (id, successCallback, failureCallback) => (dispatch) => {
  const url = 'api/user';
  return put(`${url}/${id}`, { active: 1 })
    .then(() => {
      fetchTap()(dispatch)
      if (typeof successCallback === 'function') {
        successCallback();
      }
    })
    .catch(err => {
      if (typeof failureCallback === 'function') {
        failureCallback(err);
      }
      throw err;
    });
};