import React from 'react';
import Task from './Task'
import '../styles/TasksList.global.css'

class TasksList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="tasks-list table-style">
        {this.props.tasks.map((task, idx) => <Task key={idx} task={task} idx={idx} />)}
      </div>
    )
  }
}

export default TasksList
