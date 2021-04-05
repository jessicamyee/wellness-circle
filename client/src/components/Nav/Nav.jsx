import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Nav.css";

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
      <Nav.Link onClick={handleLogout} className="nav-tabs">
        Sign Out
      </Nav.Link>
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
        <h1 id="brand-name">Wellness Circle</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="font-weight-bold">
          {currentUser && (
            <div className="welcome-msg">Welcome, {currentUser.username}</div>
          )}
          {currentUser ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
