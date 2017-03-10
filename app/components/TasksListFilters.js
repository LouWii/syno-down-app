import React from 'react';
import { capitalize, statusToIcon } from '../utils/utils'
import '../styles/TasksListFilters.global.css'

class TasksListFilters extends React.Component {

  renderButton() {
    return Object.keys(statusToIcon)
      .map((e) => <button type="button" title={capitalize(e.replace('_', ' '))} ref={e} className="btn btn-default"><span className={statusToIcon[e]} ></span></button>);
  }

  render() {
    return (
      <div className="tasks-list-filters">
          <div className="tasks-list-filter">
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-default">All</button>
              {this.renderButton()}
            </div>
          </div>
          <div className="tasks-list-search">

          </div>
        </div>
    )
  }
}

export default TasksListFilters