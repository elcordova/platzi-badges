import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../component/Badge';
import confLogo from '../images/platziconf-logo.svg';
import DeleteBadgeModal from '../component/DeleteBadgeModal';
import './styles/badgeDetails.css';

function useIncreaseCount(max) {
  const [ count, setCount ] = React.useState(0);
  if (count > max) {
    setCount(0);
  }
  return [count, setCount];
}


function BadgeDetails(props) {
  const {badge} = props;
  const [ count, setCount ] = useIncreaseCount(10)

  return (
    <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo de la conferencia"/>
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>{badge.firstName} {badge.lastName}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge firstName={badge.firstName} lastName={badge.lastName} email={badge.email} twitter={badge.twitter} jobTitle={badge.jobTitle}/>
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <button className="btn btn-primary mr-4" onClick={() =>{
                    setCount(count + 1)
                  }} >
                  increase count {count}
                  </button>
                  <Link className="btn btn-primary mb-4" to="edit">
                    Edit
                  </Link>
                <div> 
                </div>
                  <button  className="btn btn-danger" onClick={props.onOpenModal}> Delete</button>
                  <DeleteBadgeModal isOpen={props.modalIsOpen} onClose={props.onCloseModal} onDeleteBadge={props.onDeleteBadge}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BadgeDetails;