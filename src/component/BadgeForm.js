import React from 'react';

class BadgeFrom extends React.Component {
  // state = {}
  
  handleChange = (e) => {
    // console.log({[e.target.name]: e.target.value})
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleClick = (e) => {
    console.log({event: 'button was clicked'})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input name="firstName" onChange={this.props.onChange} value={this.props.formValues.firstName} type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input name="lastName" onChange={this.props.onChange} value={this.props.formValues.lastName} type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input name="email" onChange={this.props.onChange} value={this.props.formValues.email} type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input name="jobTitle" onChange={this.props.onChange} value={this.props.formValues.jobTitle} type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input name="twitter" onChange={this.props.onChange} value={this.props.formValues.twitter} type="text" className="form-control" />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
          { this.props.error && <p className="text-danger">{this.props.error.message}</p>}
        </form>
      </div>
    )
  }
}

export default BadgeFrom