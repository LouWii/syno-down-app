
function profiles(state = [], action) {
  console.log(action)
  switch(action.type){
    case 'PROFILE_ADD':
      return [
        ...state,
        {name: action.name, url: action.url, port: action.port, login: action.login, password: action.password}
      ]
    case 'PROFILE_DELETE':
      return [
        ...state.slice(0, action.idx),
        ...state.slice(action.idx + 1)
      ]
    default:
      return state
  }
}

export default profiles