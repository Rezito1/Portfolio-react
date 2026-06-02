export default function Footer({ bgColor, setBgColor }) {
  return (
    <footer className="footer">
      <div>
        <ul>
          <li>Råckstavägen 6</li>
          <li>168 42 Bromma</li>
          <li>0739389424</li>
          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nowrozireza1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              nowrozireza1@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <div className="social-media">
        <ul>
          <li>LinkedIn:</li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank">
              <i className="fab fa-linkedin"></i> Reza Nowrozi
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
