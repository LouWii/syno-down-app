
function clients(state = [], action) {
  console.log(action)
  switch(action.type){
    case 'CLIENT_LOGGEDIN':

      return state
    default:
      return state
  }
}

export default clients
