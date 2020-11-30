import React from 'react';
import Gravatar from './Gravatar';

import "./styles/badge.css";
import confLogo from "../images/badge-header.svg";
class Badge extends React.Component {
  render() {
    const { firstName, lastName, email, jobTitle, twitter } = this.props
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de conferencia" />
        </div>

        <div className="Badge__section-name">
          <Gravatar email={email} className="Badge__avatar"/>
          <h1>{firstName} <br/> {lastName}</h1>
        </div>
        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>
        <div className="Badge__footer">
          #platziConf
        </div>

      </div>
    )
  }

}

export default Badge