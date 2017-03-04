import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="task">
        <div className="task-detail task-title">
          {this.props.task.title}
        </div>
        <div className="task-detail task-status">
          {this.props.task.status}
        </div>
        <div className="task-detail task-size">
          {this.props.task.size}
        </div>
      </div>
    )
  }
}

export default Task
