import { Link } from "react-router-dom";

export default function InnerCircle() {
  return (
    <div>
      <h1>My Inner Circle</h1>
      <Link to="/user_share/list"><button>View / Modify Your Shared Settings</button></Link>

    </div>
  )
}
