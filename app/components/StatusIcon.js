import React from 'react';
import { capitalize } from '../utils/utils'
// import '../styles/StatusIcon.global.css'

class StatusIcon extends React.Component {

  render() {
    const statusToIcon = {
      'waiting': 'glyphicon glyphicon-hourglass',
      'downloading': 'glyphicon glyphicon-save',
      'paused': 'glyphicon glyphicon-pause',
      'finishing': 'glyphicon glyphicon-refresh',
      'finished': 'glyphicon glyphicon-ok',
      'hash_checking': '',
      'seeding': 'glyphicon glyphicon-export',
      'filehosting_waiting': 'glyphicon glyphicon-cloud',
      'extracting': 'glyphicon glyphicon-compressed',
      'error': 'glyphicon glyphicon-alert',
      'other': 'glyphicon glyphicon-question-sign'
    }
    let iconClass = ''
    if (statusToIcon[this.props.status]) {
      iconClass = statusToIcon[this.props.status]
    } else {
      iconClass = statusToIcon['other']
    }
    return (
      <span className={iconClass} title={capitalize(this.props.status.replace('_', ' '))} aria-hidden="true"></span>
    )
  }
}

StatusIcon.propTypes = {
  status: React.PropTypes.string.isRequired
}

export default StatusIcon
