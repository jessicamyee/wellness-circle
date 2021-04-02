import React from 'react'

export default function SummaryRow({personalAverageData}) {
  return (
    <div>
      {personalAverageData?.socialAverage}
      {personalAverageData?.physicalAverage}
      {personalAverageData?.emotionalAverage}
      {personalAverageData?.intellectualAverage}
      {personalAverageData?.occupationalAverage}
      {personalAverageData?.spiritualAverage}
    </div>
  )
}
