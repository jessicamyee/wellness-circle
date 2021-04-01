import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
 

export default function WellDataViewEdit(props) {

  // const [formData, setFormData] = useState({});
  // // const {
  // //   socialScore,
  // //   physicalScore,
  // //   emotionalScore,
  // //   intellectualScore,
  // //   occupationalScore,
  // //   spiritualScore,
  // // } = formData;

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
  
  const { id } = useParams();
  const { wellnessData, handleUpdate } = props;

  // useEffect(() => {
  //   const prefillFormData = () => {
  //     const wellnessRecord = wellnessData.find(
  //       wellnessDatum => wellnessDatum.id === Number(id)
  //     );
  //     setFormData(wellnessRecord);
  //   };
  //   if (wellnessData.length) {
  //     prefillFormData();
  //   }
  // }, [wellnessData, id]);

  useEffect(() => {
    const prefillFormData = () => {
      const wellnessRecord = wellnessData.find(wellnessDatum => wellnessDatum.id === Number(id));
      setFormData(wellnessRecord)
    }
    if (wellnessData.length) {
      prefillFormData()
    }
  }, [wellnessData, id])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
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
      <button>Save New Edits</button>
      </form>
      <Link to="/wellness_data"><button>Return to Dashboard</button></Link>
    </>
  );
}
