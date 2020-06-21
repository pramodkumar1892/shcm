export const isAuth = (state = false, action = {}) => {
    if (action.type === 'AUTH') {
      return action.data
    }
    return state
  }

  export const users = (state = [], action = {}) => {
    if (action.type === 'USERS') {
      return action.data
    }
    return state
  }