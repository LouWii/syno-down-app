import React from 'react';
import Task from './Task'
import '../styles/TasksList.global.css'

class TasksList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const listClass = this.props.style === 'table' ? 'table-style' : 'card-style'
    return (
      <div className="tasks-list">
        <div className="tasks-list-actions">
          <div className="tasks-list-filter">
            
          </div>
          <div className="tasks-list-search">

          </div>
        </div>
        <div className={'tasks-items ' + listClass}>
          {this.props.tasks.map((task, idx) => <Task key={idx} task={task} idx={idx} style={this.props.style} />)}
        </div>
      </div>
    )
  }
}

TasksList.defaultProps = {
  style: 'card'
};

export default TasksList
