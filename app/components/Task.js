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
    let peers = '?'
    let seeders = '?'
    let leechers = '?'
    let seeding = '?'
    let destination = '?'
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
        peers = this.props.task.additional.detail.connected_peers
        seeders = this.props.task.additional.detail.connected_seeders
        leechers = this.props.task.additional.detail.connected_leechers
        destination = this.props.task.additional.detail.destination
        const seedingTime = new Date(this.props.task.additional.detail.seedelapsed * 1000);
        const hh = seedingTime.getUTCHours();
        const mm = seedingTime.getUTCMinutes();
        const ss = seedingTime.getSeconds();
        seeding = hh + 'h ' + mm + 'm ' + ss + 's'
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
              <div className="task-info task-peers">
                <strong title="Peers">P</strong> {peers} &nbsp;<strong title="Seeders">S</strong> {seeders} &nbsp;<strong title="Leechers">L</strong> {leechers}
              </div>
            </div>
            <div className="task-info-row row">
              <div className="task-info task-seeding">
                <strong>Seed time</strong> {seeding}
              </div>
            </div>
            <div className="task-info-row">
              <strong>Destination</strong> {destination}
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
