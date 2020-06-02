import { post } from './../api/httpcliennt'

export const register = async (
    payload,
    successCallback,
    failureCallback
  ) => {
    try {
      const updatedPayload = {
        ...payload,
        active: 1,
      }
      const url = '/api/user'
      await post(url, updatedPayload, {})
      if (typeof successCallback === 'function') {
        successCallback()
      }
    } catch (err) {
      if (typeof failureCallback === 'function') {
        failureCallback(err)
      }
    }
  }