import React from 'react';
import TasksList from './TasksList'
import '../styles/Client.css'

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
        {this.props.clients.clientIsLoading &&
          <div className="loading-container">
            <h3>Loading</h3>
          </div>
        }
        <TasksList tasks={this.props.tasks} />
      </div>
    )
  }
}

Client.propTypes = {
  profiles: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default Client;
