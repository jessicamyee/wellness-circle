import React from 'react'
import {useState} from 'react'

export default function SharedSettings() {
  const [formData, setFormData] = useState({
    recipientUsername: "",
  });

  const { recipientUsername} = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  return (
    <div>
      <h1>Your Shared Settings</h1>
      <div>
        <p>Share your summary with new people</p>
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
        <p>You have shared your summary with the following people:</p>
      </div>
    </div>
  )
}
