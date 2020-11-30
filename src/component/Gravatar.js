import React from 'react';
import md5 from 'md5'

function Gravatar ({email, className}) {
  const hash = md5(email);
  
  return (
    <img className={className}
      src={`https://s.gravatar.com/avatar/${hash}?s=40`} 
      alt="Avatar" 
    />
  )
}

export default Gravatar