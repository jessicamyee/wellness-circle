import { Link } from "react-router-dom";
import SummaryRow from "../components/SummaryRow/SummaryRow";
import "../screens-css/InnerCircle.css";


export default function InnerCircle(props) {
  const { allShares } = props;

  return (
    <div className="inner-circle-container">
        <h1 className="inner-circle-title">My Inner Circle</h1>
        <Link to="/user_shares/list">
          <button id="share-settings-btn">View / Modify Your Shared Settings</button>
        </Link>
        {allShares.map((individualAverageData) => {
          return (
            <div key={individualAverageData.id}>
              {individualAverageData.fullName}
              <SummaryRow personalAverageData={individualAverageData} />
            </div>
          );
        })}
    </div>
  );
}
