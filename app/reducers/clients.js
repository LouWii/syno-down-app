
function clients(state = [], action) {
  switch(action.type){
    case 'CLIENT_LOGGEDIN':
      return Object.assign({}, state, {
        clientSID: action.sid
      })
    case 'CLIENT_LOADING':
      return Object.assign({}, state, {
        clientIsLoading: true
      })
    case 'CLIENT_LOADED':
      return Object.assign({}, state, {
        clientIsLoading: false
      })
    case 'CLIENT_PROFILE_SELECTED':
      return Object.assign({}, state, {
        selectedProfileIndex: action.index
      })
    default:
      return state
  }
}

export default clients
