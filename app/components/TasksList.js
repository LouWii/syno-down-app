import React from 'react'
import TasksListFilters from './TasksListFilters'
import Task from './Task'
import '../styles/TasksList.global.css'

class TasksList extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleAddTask(e) {
    e.preventDefault()
  }

  render() {
    const listClass = this.props.style === 'table' ? 'table-style' : 'card-style'
    const { statusFilter, searchKeywords} = this.props.filters
    return (
      <div className="tasks-list">
        {
          this.props.tasksLoaded
          &&
          <TasksListFilters filters={this.props.filters} filtersStatusFilter={this.props.filtersStatusFilter} filtersSearch={this.props.filtersSearch} filtersSearchReset={this.props.filtersSearchReset} />
        }
        {
          this.props.tasksLoaded
          &&
          <div className="tasks-list-actions">
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-primary" onClick={this.handleAddTask}>Add</button>
            </div>
          </div>
          }
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
