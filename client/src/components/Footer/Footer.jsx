import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="person-footer">
          <a
            href="https://www.linkedin.com/in/jessica-m-yee/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://i.imgur.com/3WZtamO.png"
              alt="linkedin"
              className="footer-photo"
            />
          </a>
          <p className="creator-name">Created By: J.Yee</p>
        </div>
      </footer>
    </div>
  );
}
