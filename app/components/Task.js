import React from 'react';
import { fileSizeSI } from '../utils/utils'
import StatusIcon from './StatusIcon'
import '../styles/Task.global.css'

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.renderStyle = this.renderStyle.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = {toggled: false}
  }

  handleClick(e) {
    this.setState({toggled: !this.state.toggled})
  }

  renderStyle(task, style) {
    let progress = '?'
    let currentSize = '?'
    const totalSize = fileSizeSI(this.props.task.size)
    let createdOn = '?'
    let finishedOn = ' - '
    let dlSpeed = '?'
    let upSpeed = '?'
    if (this.props.task.additional) {
      if (this.props.task.additional.detail && this.props.task.additional.transfer) {
        progress = this.props.task.additional.transfer.size_downloaded * 100 / this.props.task.size
      }
      if (this.props.task.additional.transfer) {
        currentSize = fileSizeSI(this.props.task.additional.transfer.size_downloaded)
        dlSpeed = this.props.task.additional.transfer.speed_download
        upSpeed = this.props.task.additional.transfer.speed_upload
      }
      if (this.props.task.additional.detail) {
        createdOn = new Date(this.props.task.additional.detail.create_time*1000).toLocaleDateString() + ' ' + new Date(this.props.task.additional.detail.create_time*1000).toLocaleTimeString()
        if (this.props.task.additional.detail.completed_time && this.props.task.additional.detail.completed_time !== 0) {
          finishedOn = new Date(this.props.task.additional.detail.completed_time*1000).toLocaleDateString() + ' ' + new Date(this.props.task.additional.detail.completed_time*1000).toLocaleTimeString()
        }
      }
    }
    if (style === 'table') {
      return (
        <div className={"task " + (this.state.toggled?"toggled":"")}>
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
    } else {
      return (
        <div className={"task " + (this.state.toggled?"toggled":"")} onClick={this.handleClick}>
          <div className="task-title">
            <StatusIcon status={this.props.task.status} /> {this.props.task.title}
          </div>
          <div className="task-progress-bar" style={{width: progress + '%'}}>
          </div>
          <div className="task-content">
            {/*<div className="task-info task-status">
              {this.props.task.status}
            </div>*/}
            <div className="task-info-row row">
              <div className="task-info">
                <span className="glyphicon glyphicon-download"></span> {dlSpeed} &nbsp; &nbsp;
                <span className="glyphicon glyphicon-upload"></span> {upSpeed}
              </div>
              <div className="task-info task-size">
                {currentSize} <strong>/ {totalSize}</strong>
              </div>
            </div>
          </div>
          <div className="task-content content-more">
            <div className="task-info-row row">
              <div className="task-info">
                <strong>Created</strong> {createdOn}
              </div>
              <div className="task-info">
                <strong>Finished</strong> {finishedOn}
              </div>
            </div>
            <div className="task-info-row row">
              <div className="task-info task-progress">
                <strong>Progress</strong> {progress.toFixed(2)} %
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return this.renderStyle(this.props.task, this.props.style)
  }
}

export default Task
