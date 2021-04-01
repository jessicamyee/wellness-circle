import React from 'react'

export default function Dashboard(props) {
  const { wellnessData } = props;
  return (
    <div>
      <h3>My Wellness Data</h3>
      {
        wellnessData.map(wellnessRecord => (
          <p key={wellnessRecord.id}>
          {wellnessRecord.createdAt},
          Social: {wellnessRecord.socialScore},
          Physical: {wellnessRecord.physicalScore},
          Emotional: {wellnessRecord.emotionalScore},
          Intellectual: {wellnessRecord.intellectualScore},
          Occupational: {wellnessRecord.occupationalScore},
          Spiritual: {wellnessRecord.spiritualScore}
          </p>
        ))
      }

    </div>
  )
}
