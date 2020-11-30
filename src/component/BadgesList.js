import React from 'react';
import BadgeItem from './BadgeItem';
import { Link } from 'react-router-dom';
import './styles/badgeList.css'



function useSearchBadges(badges) {
  const [search, setSearch ] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(()=>{
    setFilteredBadges(badges.filter(badge=>{
    return `${badge.firstName.toLowerCase()} ${badge.lastName.toLowerCase()}`.includes(search)
  }))},[badges, search]);
  return [setSearch, filteredBadges, search]
}

function BadgesList (props) {
  const badges = props.badges;
  const [setSearch, filteredBadges, search] = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return(
      <div className="BadgesList">
        <div className="form-group">
        <label>Filter Badges</label>
        <input type="text" className="form-control" value={search} placeholder="" onChange={(e)=>{setSearch(e.target.value);}}/>
      </div>
        <h3>No Badges were found</h3>
        <Link to="/badges/new" className="btn btn-primary">Create a new badge</Link>
      </div>
    )
  }
  return(
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input type="text" className="form-control" value={search} placeholder="" onChange={(e)=>{setSearch(e.target.value);}}/>
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge, index) => {
          return(
            <div className="BadgeList" key={index}>
              <Link className="text-reset text-decoration-none"  to={`badges/${badge.id}`}>
              <BadgeItem item={badge}/>
            </Link>
            </div>
          )
        })}
        </ul>
      </div>
  )
}

export default BadgesList