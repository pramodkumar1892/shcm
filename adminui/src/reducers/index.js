import { combineReducers } from 'redux'

import { isAuth, users } from './shcm.reducer'

export default combineReducers({
    users,
    isAuth,
  })