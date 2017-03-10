
function filters(state={}, action) {
  switch(action.type){
    case 'FILTERS_STATUSFILTER':
      return Object.assign({}, state, {
        statusFilter: action.statusFilter
      })
    default:
      return state
  }
}
export default filters