import React from "react";
import "./DataCircle.css";

export default function DataCircle({ title, content, colorClass }) {
  return (
    <div className={`data-circle-individual ${colorClass}`}>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
}
