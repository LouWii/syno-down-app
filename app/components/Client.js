import React from 'react';
import TasksList from './TasksList'
import '../styles/Client.global.css'

class Client extends React.Component {
  constructor(props) {
    super(props)
    const { idx } = this.props.params;
    const profile = this.props.profiles[idx];
    this.state = { profile, idx }
  }

  componentDidMount() {
    this.props.clientLogin(this.state.profile)
  }

  render() {
    return (
      <div className="client">
        <h2>{this.state.profile.name}</h2>

          <div className="loading-overlay">
            <div className="loading-wrapper">
              <div className="loading-container">
                <h3>Loading</h3>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
                    <span className="sr-only">45% Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <TasksList tasks={this.props.tasks} />
      </div>
    )
  }
}

Client.propTypes = {
  profiles: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default Client;
