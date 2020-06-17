import { post } from './../api/httpcliennt'
import { AsyncStorage } from 'react-native';
import get from 'lodash.get'

export const userAction = (data) => (dispatch) =>
  dispatch({
    type: 'USER',
    data,
  })

export const setAuth = async (data) => {
  try {
    await AsyncStorage.setItem(
      'SHCM:AUTH',
      JSON.stringify(data)
    );
  } catch (error) {
    // Error saving data
  }
};

export const getAuth = async () => {
  try {
    const value = await AsyncStorage.getItem('SHCM:AUTH');
    return JSON.parse(value)
  } catch (error) {
    // Error saving data
  }
};

export const register = (
    payload,
    successCallback,
    failureCallback
  ) => {
      const updatedPayload = {
        ...payload,
        active: 1,
      }
      const url = 'http://shcm-project.xyz/api/user'
      return post(url, updatedPayload, {}).then(() => {
        if (typeof successCallback === 'function') {
          successCallback()
        }
      }).catch(err => {
        console.log(err.response)
        if (typeof failureCallback === 'function') {
          failureCallback(err)
        }
        throw err
      })
  }

  export const login = (
    payload,
    successCallback,
    failureCallback
  ) => {
      const url = 'http://shcm-project.xyz/api/signin'
      return post(url, payload, {}).then(({ data }) => {
        setAuth(get(data, 'data[0]', {}))
        if (typeof successCallback === 'function') {
          successCallback(data)
        }
      }).catch(err => {
        console.log(err.response)
        if (typeof failureCallback === 'function') {
          failureCallback(err)
        }
        throw err
      })
  }