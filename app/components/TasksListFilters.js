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
    return Object.keys(statusToIcon)
      .map((e) => <button key={e} type="button" title={capitalize(e.replace('_', ' '))} data-status={e} className={"btn btn-"+((e===this.props.filters.statusFilter)?"primary":"default")} onClick={this.handleStatusFilter}><span className={statusToIcon[e]} ></span></button>);
  }

  handleStatusFilter(e) {
    e.preventDefault()
    this.props.filtersStatusFilter(e.currentTarget.dataset.status)
  }

  render() {
    return (
      <div className="tasks-list-filters">
          <div className="tasks-list-filter">
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" data-status="all" className={"btn btn-"+(('all'===this.props.filters.statusFilter)?"primary":"default")} onClick={this.handleStatusFilter}>All</button>
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