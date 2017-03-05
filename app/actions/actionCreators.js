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

export function deleteProfile(idx) {
  return {
    type: 'PROFILE_DELETE',
    idx
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

export function clientLogin(profile) {
  return dispatch => {
    dispatch(clientLoading())
    fetch(synoLoginQuery(profile), {credentials: 'include'}).then( (response) => {
      if(response.status === 200){
        response.json().then( (json) => {
          dispatch(clientLoggedIn(json.data.sid))
          dispatch(clientList(profile))
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

export function clientList(profile) {
  return dispatch => {
    fetch(synoDSListQuery(profile), {credentials: 'include'}).then( (response) => {
      if(response.status === 200){
        response.json().then( (json) => {
          dispatch(clientListReceived(json.data.tasks, json.data.total))
          dispatch(clientLoaded())
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
