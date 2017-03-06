import React from 'react';
import { fileSizeSI } from '../utils/utils'
import StatusIcon from './StatusIcon'
import '../styles/Task.global.css'

class Task extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let progress = '?'
    let currentSize = '?'
    const totalSize = fileSizeSI(this.props.task.size)
    if (this.props.task.additional) {
      if (this.props.task.additional.detail && this.props.task.additional.transfer) {
        progress = this.props.task.additional.transfer.size_downloaded * 100 / this.props.task.size
      }
      if (this.props.task.additional.transfer) {
        currentSize = fileSizeSI(this.props.task.additional.transfer.size_downloaded)
      }
    }
    return (
      <div className="task">
        <div className="task-info task-icon">
          <StatusIcon status={this.props.task.status} />
        </div>
        <div className="task-info task-title">
          {this.props.task.title}
        </div>
        {/*<div className="task-info task-status">
          {this.props.task.status}
        </div>*/}
        <div className="task-info task-progress">
          {progress.toFixed(2)} %
        </div>
        <div className="task-info task-size">
          {currentSize} / {totalSize}
        </div>

      </div>
    )
  }
}

export default Task
