import React from "react";
import { Link } from 'react-router-dom';

export default function Dashboard(props) {
  const { wellnessData } = props;
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
          <button>View / Edit</button>
          <button>Delete</button>
        </p>
      ))}
    </div>
  );
}
