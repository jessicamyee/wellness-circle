import { Link } from "react-router-dom";
// import SummaryRow from "../components/SummaryRow"

export default function InnerCircle() {
  return (
    <div>
      <h1>My Inner Circle</h1>
      <Link to="/user_shares/list"><button>View / Modify Your Shared Settings</button></Link>
      {/* <SummaryRow
        personalAverageData={wellnessData?.personalAverageData}
      /> */}
    </div>
  )
}
