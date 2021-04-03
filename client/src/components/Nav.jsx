import React from 'react'
import { Link } from 'react-router-dom';


export default function Nav(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <header>
        <Link to='/'><h1>Wellness Circle</h1></Link>
        {
          currentUser ?
            <>
              <p>{currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
            :
            <Link to='/login'>Login/Sign Up</Link>
        }
      </header>
      
      {currentUser && (
        <>
          <p>{currentUser.first_name}</p>
          <Link to='/wellness_data/new'>Record Today</Link>
          <Link to='/wellness_data'>Dashboard</Link>
          <Link to='/user_shares'>My Inner Circle</Link>
          <hr />
        </>
      )}
    </div>
  )
}
