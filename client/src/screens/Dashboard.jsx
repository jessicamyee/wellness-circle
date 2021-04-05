import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import SummaryRow from "../components/SummaryRow/SummaryRow";
import Moment from "moment";
import "../screens-css/Dashboard.css";

export default function Dashboard(props) {
  const [modalShowing, setModalShowing] = useState(false);
  const { historicalWellnessList, userAverage, handleDelete } = props;

  return (
    <div>
      <h1 className="dashboard-titles">7-Day Summary</h1>
      <SummaryRow personalAverageData={userAverage} />
      <Link to="/wellness_data/new">
        <button id="record-today-btn">RECORD TODAY</button>
      </Link>
      <h1 className="dashboard-titles">View History</h1>
      {historicalWellnessList.map((wellnessRecord) => {
        return (
          <div key={wellnessRecord.id} className="history-content-section">
            <p>
              {Moment(wellnessRecord.createdAt).format("MMMM D, YYYY")}
              <Link to={`/wellness_data/${wellnessRecord.id}/edit`}>
                <button id="dashboard-view-btn">View / Edit</button>
              </Link>
              <button
                id="dashboard-delete-btn"
                onClick={() => setModalShowing(wellnessRecord.id)}
              >
                Delete
              </button>
            </p>
          </div>
        );
      })}
      {modalShowing && (
        <Modal
          modalShowing={modalShowing}
          setModalShowing={setModalShowing}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}
