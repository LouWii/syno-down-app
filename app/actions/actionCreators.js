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

export function clientLogin(profile) {
  return dispatch => {

    fetch(synoLoginQuery(profile), {credentials: 'include'}).then( (response) => {
      if(response.status === 200){
        response.json().then( (json) => {
          dispatch(clientLoggedIn(json.data.sid))
          dispatch(clientList(profile))
        })

      } else {
        // console.error(response)
      }
    }, (response) => {
      // Promise failed/rejected
      console.error(response)
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
          console.log(json)
          //dispatch(clientLoggedIn(json.data.sid))
          dispatch(clientListReceived(json.data.tasks, json.data.total))
        })
      } else {
        // console.error(response)
      }
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
