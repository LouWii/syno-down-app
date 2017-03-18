import React from 'react'
import TasksListFilters from './TasksListFilters'
import Task from './Task'
import '../styles/TasksList.global.css'

class TasksList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const listClass = this.props.style === 'table' ? 'table-style' : 'card-style'
    const { statusFilter, searchKeywords} = this.props.filters
    return (
      <div className="tasks-list">
        <TasksListFilters filters={this.props.filters} filtersStatusFilter={this.props.filtersStatusFilter} filtersSearch={this.props.filtersSearch} filtersSearchReset={this.props.filtersSearchReset} />
        <div className={'tasks-items ' + listClass}>
          {this.props.tasks.filter(
            (task) => ('all'===statusFilter||task.status===statusFilter)
            && (''===searchKeywords||task.title.toLowerCase().includes(searchKeywords.toLowerCase()))
          ).map((task, idx) => <Task key={idx} task={task} idx={idx} style={this.props.style} />)}
        </div>
      </div>
    )
  }
}

TasksList.defaultProps = {
  style: 'card'
};

export default TasksList
