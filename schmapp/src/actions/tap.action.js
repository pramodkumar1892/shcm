import {fetch, post} from './../api/httpcliennt';
import get from 'lodash.get';

export const fetchTap = (id, successCallback, failureCallback) => () => {
  const url = 'http://shcm-project.xyz/api/tap/';
  return fetch(`${url}${id}`, {})
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

export const enterTap = (payload, successCallback, failureCallback) => () => {
  const url = 'http://shcm-project.xyz/api/tap';
  return post(url, payload)
    .then(({data}) => {
      if (typeof successCallback === 'function') {
        successCallback(get(data, 'data', {}));
      }
    })
    .catch(err => {
      if (typeof failureCallback === 'function') {
        failureCallback(err);
      }
      throw err;
    });
};
