import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
 

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

  useEffect(() => {
    const prefillFormData = () => {
      const wellnessRecord = historicalWellnessList.find(wellnessDatum => wellnessDatum.id === Number(id));
      setFormData(wellnessRecord)
    }
    if (historicalWellnessList.length) {
      prefillFormData()
    }
  }, [historicalWellnessList, id])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: parseInt(value)
    }));
  };
    
  return (
    <>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}
    >
      <h3>Edit INSERT DATE</h3>
      <div>
        <label>
          Social:
          <input
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
        <label>
          Physical:
          <input
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
        <label>
          Emotional:
          <input
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
        <label>
          Intellectual:
          <input
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
        <label>
          Occupational:
          <input
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
        <label>
          Spiritual:
          <input
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
      <button>Save New Edits</button>
      </form>
      <Link to="/wellness_data"><button>Return to Dashboard</button></Link>
    </>
  );
}
