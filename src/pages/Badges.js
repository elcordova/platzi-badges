import React from 'react';
import {Link} from 'react-router-dom'
import './styles/badges.css';
import confLogo from '../images/badge-header.svg'
import BadgesList from '../component/BadgesList'

import api from '../api.js';
import PageLoading from '../component/PageLoading';
import PageError from '../component/PageError';

class Badges extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      data: undefined,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    this.setState({ loading: true, error: null });
    try{
      const data = await api.badges.list()
      this.setState({
        loading: false, data
      })
    } catch(error) {
      this.setState({
        loading: false, error
      })
    }
  }

  render() {
    if (this.state.loading === true) {
      return <PageLoading/>;
    }

    if (this.state.error) {
      return <PageError error={this.state.error}/>;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
              <div className="Badges__container">
                <img className="Badges_conf-logo" src={confLogo}/>
              </div>
          </div>
        </div>
        
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="badges/new" className="btn btn-primary">New Badge</Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
                <BadgesList badges={this.state.data}/>
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }

}

export default Badges
