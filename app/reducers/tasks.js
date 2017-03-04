
function tasks(state = [], action) {
  console.log(action)
  switch(action.type){
    case 'TASKS_LIST_UPDATE':
      // List of tasks hae been updated
      if (state.length) {
        return state.map(obj => action.tasksList.find(o => o.id === obj.id) || obj);
      } else {
        return action.tasksList
      }
    default:
      return state
  }
}

export default tasks
