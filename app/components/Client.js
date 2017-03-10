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
        <TasksList tasks={this.props.tasks} filters={this.props.filters} filtersStatusFilter={this.props.filtersStatusFilter}/>
      </div>
    )
  }
}

Client.propTypes = {
  profiles: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default Client;
