
function clients(state = [], action) {
  switch(action.type){
    case 'CLIENT_LOGGEDIN': // Client is logged in to Syno NAS
      return Object.assign({}, state, {
        clientSID: action.sid
      })
    case 'CLIENT_LOADING': // Client big loading (loading overlay)
      return Object.assign({}, state, {
        clientIsLoading: true
      })
    case 'CLIENT_LOADED': // Client big loading done
      return Object.assign({}, state, {
        clientIsLoading: false
      })
    case 'CLIENT_TASKS_LOADED': // Client has loaded tasks
      return Object.assign({}, state, {
        tasksLoaded: true
      })
    case 'CLIENT_PROFILE_SELECTED':
      return Object.assign({}, state, {
        selectedProfileIndex: action.index
      })
    case 'CLIENT_PROFILE_CLEAR':
      return Object.assign({}, state, {
        selectedProfileIndex: -1
      })
    default:
      return state
  }
}

export default clients
