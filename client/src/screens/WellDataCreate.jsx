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
        <div className="title-field">
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
        <div className="hide-statement">
          <div className="guide-title">Social Guiding Statements:</div>
          <div>
            I feel good about the quality of communication with my
            family/friends.
          </div>
          <div>
            I feel good about the amount of time spent by myself or with others.
          </div>
          <div>I am able to communicate with others effectively. </div>
        </div>

        <div className="title-field">
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
        <div className="hide-statement">
          <div className="guide-title">Physical Guiding Statements:</div>
          <div>I sleep well.</div>
          <div>I am happy with my body.</div>
          <div>I feel good about the amount of physical exercise I get.</div>
        </div>

        <div className="title-field">
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
        <div className="hide-statement">
          <div className="guide-title">Emotional Guiding Statements:</div>
          <div>I am happy with myself.</div>
          <div>
            I am able to identify the situations and factors that overstress me.
          </div>
          <div>I am able to deal with day-to-day pressures.</div>
        </div>

        <div className="title-field">
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
        <div className="hide-statement">
          <div className="guide-title">Intellectual Guiding Statements:</div>
          <div>I am learning new things.</div>
          <div>I pursue mentally stimulating interests.</div>
          <div>I know how to set and reach goals and objectives.</div>
        </div>

        <div className="title-field">
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
        <div className="hide-statement">
          <div className="guide-title">Occupational Guiding Statements:</div>
          <div>I feel good about doing what I am doing daily at work.</div>
          <div>I feel like I am learning useful things at work.</div>
          <div>
            I feel good about the professional opportunities available to me.
          </div>
        </div>

        <div className="title-field">
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
        <div className="hide-statement">
          <div className="guide-title">Spiritual Guiding Statements:</div>
          <div>I have feelings of peace.</div>
          <div>
            I am comfortable with my spirituality at this time in my life.
          </div>
          <div>I have a sense of meaning and purpose in my life.</div>
        </div>

        <button id="add-wellness-btn">Submit</button>
      </form>
    </div>
  );
}
