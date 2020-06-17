export default (state = {}, action = {}) => {
    if (action.type === 'USER') {
      return action.data
    }
    return state
  }