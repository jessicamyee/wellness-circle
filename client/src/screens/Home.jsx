import "../screens-css/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="homepage-statement-container">
        <h1 className="homepage-statement">Take Control of Your Wellness...</h1>
        <h1 className="homepage-statement">One Data Point at a Time</h1>
      </div>
      <div>
        <h3 id="homepage-process-title">How It Works</h3>
        <div className="process-card-section">
          <div className="individual-process-card">
            <img
              id="lightbulb"
              src="https://i.imgur.com/FO4qcWd.png"
              alt="lightbulb"
            />
            <p>STEP 1: Sign up for a FREE account</p>
          </div>

          <div className="individual-process-card">
            <img
              id="laptop"
              src="https://i.imgur.com/EhGbmH7.png"
              alt="computer"
            />
            <p>STEP 2: Begin tracking your wellness </p>
          </div>

          <div className="individual-process-card">
            <img src="https://i.imgur.com/oM0cqkm.png" alt="bar graph" />
            <p>STEP 3: View your 7-day summary </p>
          </div>

          <div className="individual-process-card">
            <img
              id="connection-img"
              src="https://i.imgur.com/cIWf3Eh.png"
              alt="people connecting"
            />
            <p id="connection-text">
              STEP 4: Share & view your inner circle’s summary
            </p>
          </div>
        </div>
      </div>

      <Link to="/signup"><button id="homepage-signup-btn">SIGN UP</button></Link>
    </div>
  );
}
