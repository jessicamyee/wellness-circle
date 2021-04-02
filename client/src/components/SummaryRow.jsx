import React from 'react'

export default function SummaryRow({personalAverageData}) {
  return (
    <div>
      Social: {personalAverageData?.socialAverage} 
      Physical: {personalAverageData?.physicalAverage} 
      Emotional: {personalAverageData?.emotionalAverage} 
      Intellectual: {personalAverageData?.intellectualAverage} 
      Occupational: {personalAverageData?.occupationalAverage} 
      Spiritual: {personalAverageData?.spiritualAverage} 
    </div>
  )
}
