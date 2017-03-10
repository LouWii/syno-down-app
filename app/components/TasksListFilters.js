import React from 'react';
import { capitalize, statusToIcon } from '../utils/utils'
import '../styles/TasksListFilters.global.css'

class TasksListFilters extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeFilter: 'all' }
    this.handleStatusFilter = this.handleStatusFilter.bind(this)
    this.renderButton = this.renderButton.bind(this)
  }

  renderButton() {
    console.log(this)
    return Object.keys(statusToIcon)
      .map((e) => <button key={e} type="button" title={capitalize(e.replace('_', ' '))} ref={e} className={"btn btn-"+((e===this.state.activeFilter)?"primary":"default")}><span className={statusToIcon[e]} ></span></button>);
  }

  handleStatusFilter(e) {
    e.preventDefault()

  }

  render() {
    return (
      <div className="tasks-list-filters">
          <div className="tasks-list-filter">
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" ref="all" className={"btn btn-"+(('all'===this.state.activeFilter)?"primary":"default")}>All</button>
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