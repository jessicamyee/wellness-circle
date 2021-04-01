import { useState } from "react";

export default function WellDataCreate(props) {

  const [formData, setFormData] = useState({
    social_score: "",
    physical_score: "",
    emotional_score: "",
    intellectual_score: "",
    occupational_score: "",
    spiritual_score: "",
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h1>Record Today</h1>
      <h3>
        From 1-10, how would you rate the following categories for today?{" "}
      </h3>
      <div>
        <label>
          Social:
          <input
            type="number"
            id="number"
            name="social_score"
            min="1"
            max="10"
            value={socialScore}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Physical:
          <input
            type="number"
            id="number"
            name="physical_score"
            min="1"
            max="10"
            value={physicalScore}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Emotional:
          <input
            type="number"
            id="number"
            name="emotional_score"
            min="1"
            max="10"
            value={emotionalScore}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Intellectual:
          <input
            type="number"
            id="number"
            name="intellectual_score"
            min="1"
            max="10"
            value={intellectualScore}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Occupational:
          <input
            type="number"
            id="number"
            name="occupational_score"
            min="1"
            max="10"
            value={occupationalScore}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Spiritual:
          <input
            type="number"
            id="number"
            name="spiritual_score"
            min="1"
            max="10"
            value={spiritualScore}
            onChange={handleChange}
          />
        </label>
      </div>

      <button>Submit</button>
    </form>
  );
}
