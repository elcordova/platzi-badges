import React from 'react';
import './styles/pageError.css'
class PageError extends React.Component {
  render() {
    return( 
      <div className="PageError">
        {this.props.error.message}
      </div>
    )
  }
}
export default PageError;