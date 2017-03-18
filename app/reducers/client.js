
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
    case 'TASKS_LIST_UPDATE':
      // List of tasks has been updated
      if (state.tasks.length) {
        return Object.assign({}, state, {
          tasks: state.tasks.map(obj => action.tasksList.find(o => o.id === obj.id) || obj)
        })
      } else {
        return Object.assign({}, state, {
          tasks: action.tasksList
        })
      }
    case 'CLIENT_PROFILE_SELECTED':
      return Object.assign({}, state, {
        selectedProfileIndex: action.index
      })
    case 'CLIENT_PROFILE_CLEAR':
      return Object.assign({}, state, {
        selectedProfileIndex: -1
      })
    case 'FILTERS_STATUSFILTER':
      const filters = Object.assign({}, state.filters, {
        statusFilter: action.statusFilter
      })
      return Object.assign({}, state, {
        filters: filters
      })
    case 'FILTERS_SEARCH':
      const filtersTmp = Object.assign({}, state.filters, {
        searchKeywords: action.keywords
      })
      return Object.assign({}, state, {
        filters: filtersTmp
      })
    case 'FILTERS_SEARCH_RESET':
      const filtersTmpR = Object.assign({}, state.filters, {
        searchKeywords: ''
      })
      return Object.assign({}, state, {
        filters: filtersTmpR
      })
    default:
      return state
  }
}

export default clients
