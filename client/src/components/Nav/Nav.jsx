
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function MainNav(props) {
  const { currentUser, handleLogout } = props;

  const authenticatedOptions = (
    <>
      <Nav.Link as={NavLink} to="/wellness_data/new" className="nav-tabs">
        Record Today
      </Nav.Link>
      <Nav.Link as={NavLink} to="/wellness_data" className="nav-tabs">
        Dashboard
      </Nav.Link>
      <Nav.Link as={NavLink} to="/user_shares" className="nav-tabs">
        My Inner Circle
      </Nav.Link>
      <Nav.Link onClick={handleLogout}>Sign Out</Nav.Link>
    </>
  );

  const unauthenticatedOptions = (
    <>
      <Nav.Link className="nav-tabs" href="/login">
        Login
      </Nav.Link>
      <Nav.Link className="nav-tabs" href="/signup">
        Sign Up
      </Nav.Link>
    </>
  );

  return (
    <Navbar className="nav-section sticky-top" expand="lg">
      <Navbar.Brand href="/" className="page-logo">
        <h1>Wellness Circle</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="font-weight-bold">
          {currentUser ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


  // <div>
  //   <Navbar.Brand href="/">
  //     <h1>Wellness Circle</h1>
  //   </Navbar.Brand>

  //   {currentUser && (
  //       <>
  //         <Link to="/wellness_data/new">Record Today</Link>
  //         <Link to="/wellness_data">Dashboard</Link>
  //         <Link to="/user_shares">My Inner Circle</Link>
  //       </>
  //     )}

  //     {!currentUser ? (
  //       <>
  //         <div><Link to="/login">Login</Link></div>
  //         <div><Link to="/signup">Sign Up</Link></div>
  //       </>
  //     ) : (
  //         <button onClick={handleLogout}>Sign Out</button>
  //     )}
  // </div>;
