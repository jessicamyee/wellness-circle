import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../screens-css/WellDataViewEdit.css";

export default function WellDataViewEdit(props) {
  const [formData, setFormData] = useState({
    socialScore: "",
    physicalScore: "",
    emotionalScore: "",
    intellectualScore: "",
    occupationalScore: "",
    spiritualScore: "",
  });

  const {
    socialScore,
    physicalScore,
    emotionalScore,
    intellectualScore,
    occupationalScore,
    spiritualScore,
  } = formData;

  const { id } = useParams();
  const { historicalWellnessList, handleUpdate } = props;

  // const wellnessRecord = historicalWellnessList.find(wellnessDatum => wellnessDatum.id === Number(id));

  useEffect(() => {
    const prefillFormData = () => {
      const wellnessRecord = historicalWellnessList.find(
        (wellnessDatum) => wellnessDatum.id === Number(id)
      );
      setFormData(wellnessRecord);
    };
    if (historicalWellnessList.length) {
      prefillFormData();
    }
  }, [historicalWellnessList, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: parseInt(value),
    }));
  };

  return (
    <div className="edit-form-container">
      <h3 id="edit-title">Edit INSERT DATE</h3>
      {/* {wellnessRecord.createdAt} */}
      <form
        className="edit-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id, formData);
        }}
      >
        <h3 id="edit-statement">View and/or edit this day's details</h3>
        <div>
          <label className="edit-text">
            Social:
            <input
              className="edit-field"
              type="number"
              id="number"
              name="socialScore"
              min="1"
              max="10"
              value={socialScore}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label className="edit-text">
            Physical:
            <input
              className="edit-field"
              type="number"
              id="number"
              name="physicalScore"
              min="1"
              max="10"
              value={physicalScore}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label className="edit-text">
            Emotional:
            <input
              className="edit-field"
              type="number"
              id="number"
              name="emotionalScore"
              min="1"
              max="10"
              value={emotionalScore}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label className="edit-text">
            Intellectual:
            <input
              className="edit-field"
              type="number"
              id="number"
              name="intellectualScore"
              min="1"
              max="10"
              value={intellectualScore}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label className="edit-text">
            Occupational:
            <input
              className="edit-field"
              type="number"
              id="number"
              name="occupationalScore"
              min="1"
              max="10"
              value={occupationalScore}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label className="edit-text">
            Spiritual:
            <input
              className="edit-field"
              type="number"
              id="number"
              name="spiritualScore"
              min="1"
              max="10"
              value={spiritualScore}
              onChange={handleChange}
            />
          </label>
        </div>
        <button id="edit-btn">Save New Edits</button>
        <div>
          <Link to="/wellness_data">
            <button id="return-btn">Return to Dashboard</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
