import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import "./Layout.css";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <>
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
      <div className="layout-main-content">{props.children}</div>
      <Footer />
    </>
  );
}
