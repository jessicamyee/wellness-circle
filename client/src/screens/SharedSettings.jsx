import { useState } from "react";
import "../screens-css/SharedSettings.css";

export default function SharedSettings(props) {
  const { shareList, handleShareYourSummary, shareError } = props;

  const [formData, setFormData] = useState({
    recipientUsername: "",
  });

  const { recipientUsername } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="shared-settings-container">
      <h1 id="shared-settings-title">Your Shared Settings</h1>

      <form
        className="shared-settings-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleShareYourSummary(formData);
          setFormData({ recipientUsername: "" });
        }}
      >
        <div className="shared-box">
          <h3 className="shared-box-statement">
            Share your 7-day summary with new people
          </h3>
          <label className="sharing-text">
            Person's Username:
            <input
              className="sharing-field"
              type="text"
              id="recipientUsername"
              name="recipientUsername"
              value={recipientUsername}
              onChange={handleChange}
            />
          </label>
          <div>
            <button id="share-btn">Share</button>
          </div>
          <div id="share-error">{shareError}</div>
        </div>

        <div className="shared-box">
          <h3 className="shared-box-statement">
            You have shared your summary with the following people:
          </h3>
          {shareList?.map((sharedRecord) => (
            <p key={sharedRecord.id}>
              {sharedRecord.firstName} {sharedRecord.lastName}
            </p>
          ))}
        </div>
      </form>
    </div>
  );
}
