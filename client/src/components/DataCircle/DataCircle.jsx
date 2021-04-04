import React from "react";
import "./DataCircle.css";

export default function DataCircle({ title, content, colorClass }) {
  return (
    <div className={`data-circle-individual ${colorClass}`}>
      <div id="circle-title">{title}</div>
      <div id="circle-content">{content}</div>
    </div>
  );
}
