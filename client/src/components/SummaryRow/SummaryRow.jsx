import "./SummaryRow.css";
import DataCircle from "../DataCircle/DataCircle";

export default function SummaryRow({ personalAverageData }) {
  function colorClassFromAvg(avgScore) {
    if (!avgScore) {
      return "white";
    } else if (avgScore >= 1 && avgScore < 4) {
      return "red";
    } else if (avgScore >= 4 && avgScore < 7) {
      return "yellow";
    } else {
      return "green";
    }
  }

  return (
    <div className="summary-row">
      <DataCircle
        title={"Social:"}
        content={personalAverageData?.socialAverage}
        colorClass={colorClassFromAvg(personalAverageData?.socialAverage)}
      />
      <DataCircle
        title={"Physical:"}
        content={personalAverageData?.physicalAverage}
        colorClass={colorClassFromAvg(personalAverageData?.physicalAverage)}
      />
      <DataCircle
        title={"Emotional:"}
        content={personalAverageData?.emotionalAverage}
        colorClass={colorClassFromAvg(personalAverageData?.emotionalAverage)}
      />
      <DataCircle
        title={"Intellectual:"}
        content={personalAverageData?.intellectualAverage}
        colorClass={colorClassFromAvg(personalAverageData?.intellectualAverage)}
      />
      <DataCircle
        title={"Occupational:"}
        content={personalAverageData?.occupationalAverage}
        colorClass={colorClassFromAvg(personalAverageData?.occupationalAverage)}
      />
      <DataCircle
        title={"Spiritual:"}
        content={personalAverageData?.spiritualAverage}
        colorClass={colorClassFromAvg(personalAverageData?.spiritualAverage)}
      />
    </div>
  );
}
