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
    this.props.selectClientProfile(this.state.idx)
    this.props.clientLogin(this.state.profile)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.client.autoRefresh
    && this.props.client.tasksLoaded) {
      // Do ajax polling
    }
  }

  componentWillUnmount() {
    // Stop any refreshing query ?
  }

  render() {
    return (
      <div className="client">
        <TasksList tasks={this.props.client.tasks} filters={this.props.client.filters} filtersStatusFilter={this.props.filtersStatusFilter} filtersSearch={this.props.filtersSearch} filtersSearchReset={this.props.filtersSearchReset} />
      </div>
    )
  }
}

Client.propTypes = {
  profiles: React.PropTypes.arrayOf(React.PropTypes.object),
  client: React.PropTypes.object
}

export default Client;
