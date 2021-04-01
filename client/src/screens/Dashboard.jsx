import React from 'react'

export default function Dashboard(props) {
  const { wellnessData } = props;
  console.log(wellnessData);
  return (
    <div>
      <h3>My Wellness Data</h3>
      {
        wellnessData.map(wellnessRecord => (
          <p key={wellnessRecord.id}>{wellnessRecord.intellectualScore} </p>
        ))
      }
    </div>
  )
}
