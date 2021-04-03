import { Link } from "react-router-dom";

export default function Nav(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <Link to="/">
        <h1>Wellness Circle</h1>
      </Link>

      {currentUser && (
        <>
          <Link to="/wellness_data/new">Record Today</Link>
          <Link to="/wellness_data">Dashboard</Link>
          <Link to="/user_shares">My Inner Circle</Link>
        </>
      )}

      {!currentUser ? (
        <>
          <div><Link to="/login">Login</Link></div>
          <div><Link to="/signup">Sign Up</Link></div>
        </>
      ) : (
          <button onClick={handleLogout}>Sign Out</button>
      )}
    </div>
  );
}
