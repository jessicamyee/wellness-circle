import { Link } from "react-router-dom";
import SummaryRow from "../components/SummaryRow";

export default function InnerCircle(props) {
  const { allShares } = props;

  return (
    <div>
      <h1>My Inner Circle</h1>
      <Link to="/user_shares/list">
        <button>View / Modify Your Shared Settings</button>
      </Link>
      {allShares.map((individualAverageData) => {
        return (
          <div key={individualAverageData.id}>
            {individualAverageData.fullName}
            <SummaryRow
              personalAverageData={individualAverageData}
            />
          </div>
        );
      })}
    </div>
  );
}
