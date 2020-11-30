import React from 'react';
import Gravatar from './Gravatar';
import './styles/badgeItem.css';

class BadgeItem extends React.Component {
  render() {
    const {id,firstName ,lastName ,email, jobTitle ,twitter } = this.props.item;
    return (
        <div className="BadgeItem__container" key={id}>
          <Gravatar className="BadgeItem_item-icon" email={email}/>
          <div className="BadgeItem_item-text">
            <div className='name'><b>{firstName} {lastName}</b></div>
            <div className='twitter'>@{twitter}</div>
            <span className='jobTitle'>{jobTitle}</span>
          </div>
        </div>
    )
  }
}
export default BadgeItem