import React from 'react';
import Task from './Task'

class TasksList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="tasks-list">
        {this.props.tasks.map((task, idx) => <Task key={idx} task={task} idx={idx} />)}
      </div>
    )
  }
}

export default TasksList
