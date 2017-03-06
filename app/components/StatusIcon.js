import React from 'react';
// import '../styles/StatusIcon.global.css'

class StatusIcon extends React.Component {
  constructor(props) {
    super(props)
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
    if (statusToIcon[this.props.status]) {
      this.setState({iconClass: statusToIcon[this.props.status]})
    } else {
      this.setState({iconClass: statusToIcon['other']})
    }
  }

  render() {
    return (
      <span className={this.state.iconClass} aria-hidden="true"></span>
    )
  }
}

StatusIcon.propTypes = {
  status: React.PropTypes.string.isRequired
}

export default StatusIcon
