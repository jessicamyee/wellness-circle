import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout(props) {
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
      <hr />
      {/* {currentUser && (
        <>
          <Link to='/foods'>Foods</Link>
          <Link to='/flavors'>Flavors</Link>
          <hr />
        </>
      )} */}

      {currentUser && (
        <>
          <p>{currentUser.first_name}</p>
        </>
      )}
      {props.children}
    </div>
  )
}