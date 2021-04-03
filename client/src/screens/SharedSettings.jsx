import React from "react";
import { useState } from "react";

export default function SharedSettings(props) {
  const { shareList, handleShareYourSummary } = props;

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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleShareYourSummary(formData);
      }}
    >
      <h1>Your Shared Settings</h1>
      <div>
        <h3>Share your summary with new people</h3>
        <label>
          Person's Username:
          <input
            type="text"
            id="recipientUsername"
            name="recipientUsername"
            value={recipientUsername}
            onChange={handleChange}
          />
        </label>
      </div>
      <button>Share</button>
      <div>
        <h3>You have shared your summary with the following people:</h3>
        {shareList?.map((sharedRecord) => (
          <p key={sharedRecord.id}>
            {sharedRecord.firstName} {sharedRecord.lastName}
          </p>
        ))}
      </div>
    </form>
  );
}
