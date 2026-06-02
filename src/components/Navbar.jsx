import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header id="header">
      <nav>
        <ul>

          <li><NavLink to="/"><i className="fas fa-home"></i> Home</NavLink></li>
          <li><NavLink to="/portfolio"><i className="fas fa-briefcase"></i> Portfolio</NavLink></li>
          <li><NavLink to="/cv"><i className="fas fa-file-alt"></i> CV</NavLink></li>
          <li><NavLink to="/about"><i className="fas fa-user"></i> About</NavLink></li>
          
        </ul>
      </nav>
    </header>
  )
}