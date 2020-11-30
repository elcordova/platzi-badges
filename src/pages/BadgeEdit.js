import React from 'react';
import Badge from '../component/Badge'
import BadgeForm from '../component/BadgeForm'
import PageLoading from '../component/PageLoading'

import header from '../images/platziconf-logo.svg';
import api from '../api.js'
import './styles/badgeEdit.css'

class BadgeEdit extends React.Component {
  state = {
    loading: false, error: null,
    form: {
    firstName:'',
    lastName:'',
    jobTitle:'',
    email:'',
    twitter:'',
  }}

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({loading: true, error: null})
    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )

      this.setState({loading: false, form: data})
    } catch (error) {
      this.setState({loading: true, error})
    }
  }

  handleChange = e => this.setState({
    form: {...this.state.form, 
      [e.target.name]: e.target.value
    }});

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({loading: true, error: null})
    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({loading: false, error: null})

      this.props.history.push(`/badges/`);

    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }
    return (
      <React.Fragment>
          <div className="BadgeEdit__hero">
            <img className="Badge__hero-image img-fluid" src={header} alt="Logo"/>
          </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
              firstName={this.state.form.firstName || 'FIRST_NAME'} 
              lastName={this.state.form.lastName || 'LAST_NAME'}  
              twitter={this.state.form.twitter || 'TWITTER'} 
              email={this.state.form.email || 'EMAIL'} 
              jobTitle={this.state.form.jobTitle || 'JOB_TITLE'} 
              />
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form} error={this.state.error}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}

export default BadgeEdit