import React from 'react';
import api from '../api';

import BadgeDetails from './BadgeDetails'
import PageLoading from '../component/PageLoading';
import PageError from '../component/PageError';


class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true, error: null, data: undefined, modalIsOpen:false
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({loading: true, error: null})
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({loading: false, data});
    } catch (error) {
      this.setState({loading: false, error})
    }
  }
  render() {
    if (this.state.loading) {
      return (<PageLoading  badge={this.state.data}/>);
    }

    if (this.state.error) {
      return (<PageError />);
    }
    return (
      <BadgeDetails badge={this.state.data} 
      modalIsOpen={this.state.modalIsOpen} 
      onOpenModal={this.handleOpenModal} 
      onCloseModal={this.handleCloseModal}
      onDeleteBadge = {this.handleDeleteBadge}
      />
    )
  }

  handleCloseModal = () => {
    this.setState({
      modalIsOpen: false
    })
  }
  handleOpenModal = () => {
    this.setState({
      modalIsOpen: true
    })
  }

  handleDeleteBadge = async() =>{
    this.setState({loading: true, error: null});
    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({loading: false, error});
    }
  }

}

export default BadgeDetailsContainer