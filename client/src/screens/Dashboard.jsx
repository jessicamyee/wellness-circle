import {useState} from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal"

export default function Dashboard(props) {
  const [open, handleOpen] = useState(false)
  const { wellnessData, handleDelete, currentUser } = props;


  return (
    <div>
      <h3>Summary</h3>
      {/* //TODO: Display the averages over a 7-day period */}
      <h3>INSERT AVG DATA HERE</h3> 
      <Link to='/wellness_data/new'><button>Record Today</button></Link>
      <h3>View History</h3>
      {wellnessData.map((wellnessRecord) => (
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
