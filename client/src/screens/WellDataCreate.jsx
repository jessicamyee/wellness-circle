import { useState } from "react";
import "../screens-css/WellDataCreate.css";

export default function WellDataCreate(props) {
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

  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="create-form-container">
      <h1 id="create-title">Record Today</h1>
      <form
        className="create-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData);
        }}
      >
        <h3 id="create-statement">
          From 1-10, how would you rate the following categories for today?{" "}
        </h3>
        <div>
          <label className="create-text">
            Social:
            <input
              className="create-field"
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
          <label className="create-text">
            Physical:
            <input
              className="create-field"
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
          <label className="create-text">
            Emotional:
            <input
              className="create-field"
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
          <label className="create-text">
            Intellectual:
            <input
              className="create-field"
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
          <label className="create-text">
            Occupational:
            <input
              className="create-field"
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
          <label className="create-text">
            Spiritual:
            <input
              className="create-field"
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

        <button id="add-wellness-btn">Submit</button>
      </form>
    </div>
  );
}
