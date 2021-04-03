import {useState} from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal"
import SummaryRow from "../components/SummaryRow";

export default function Dashboard(props) {
  const [open, handleOpen] = useState(false)
  const { historicalWellnessList, userAverage, handleDelete } = props;
  
  
  debugger;
  return (
    <div>
      <h3>Summary</h3>
      <SummaryRow
        personalAverageData={userAverage}
      />
      <Link to='/wellness_data/new'><button>Record Today</button></Link>
      <h3>View History</h3>
      {historicalWellnessList.map((wellnessRecord) => (
        <p key={wellnessRecord.id}>
          {wellnessRecord.createdAt}
          <Link to={`/wellness_data/${wellnessRecord.id}/edit`}><button>View / Edit</button></Link>
          <button onClick={() => handleOpen(wellnessRecord.id)}>Delete</button>
        </p>
      ))}
      {open && (
        <Modal
          open={open}
          handleOpen={handleOpen}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}
