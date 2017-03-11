import { synoLoginQuery, synoDSListQuery } from '../utils/syno-api'

export function addProfile(name, url, port, login, password) {
  return {
    type: 'PROFILE_ADD',
    name,
    url,
    port,
    login,
    password
  }
}

export function deleteProfile(index) {
  return {
    type: 'PROFILE_DELETE',
    index
  }
}

export function selectClientProfile(index) {
  return {
    type: 'CLIENT_PROFILE_SELECTED',
    index
  }
}

export function clearSelectedClientProfile() {
  return {
    type: 'CLIENT_PROFILE_CLEAR'
  }
}

/**
 * Create action when current client is loading data
 * @export
 * @returns {object}
 */
export function clientLoading() {
  return {
    type: 'CLIENT_LOADING'
  }
}

/**
 * Create action when current client has finished loading data
 * @export
 * @returns {object}
 */
export function clientLoaded() {
  return {
    type: 'CLIENT_LOADED'
  }
}

export function clientLogin(profile, autoRefresh = false) {
  return dispatch => {
    dispatch(clientLoading())
    fetch(synoLoginQuery(profile), {credentials: 'include'}).then( (response) => {
      if(response.status === 200){
        response.json().then( (json) => {
          dispatch(clientLoggedIn(json.data.sid))
          dispatch(clientList(profile, autoRefresh))
        })

      } else {
        console.error(response)
        dispatch(clientLoaded())
      }
    }, (response) => {
      // Promise failed/rejected
      console.error(response)
      dispatch(clientLoaded())
    })
  }
}

export function clientLoggedIn(sid) {
  return {
    type: 'CLIENT_LOGGEDIN',
    sid
  }
}

export function clientList(profile, autoRefresh) {
  return dispatch => {
    fetch(synoDSListQuery(profile), {credentials: 'include'}).then( (response) => {
      if(response.status === 200){
        response.json().then( (json) => {
          dispatch(clientListReceived(json.data.tasks, json.data.total))
          dispatch(clientLoaded())
          dispatch({type: 'CLIENT_TASKS_LOADED'})
        })
      } else {
        console.error(response)
        dispatch(clientLoaded())
      }
    }, (response) => {
      // Promise failed/rejected
      console.error(response)
      dispatch(clientLoaded())
    })
  }
}

export function clientListReceived(tasksList, totalTasks) {
  return {
    type: 'TASKS_LIST_UPDATE',
    tasksList,
    totalTasks
  }
}

export function filtersStatusFilter(statusFilter) {
  return {
    type: 'FILTERS_STATUSFILTER',
    statusFilter
  }
}
