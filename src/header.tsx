import { Link } from "react-router-dom";
function Header() {
  return (
    <header id="header">
      <nav className="navbare">
        <ul className="navitems">
          <li>
            <a className="HomeButton">Home</a>
          </li>
          <li>
            <a href="#footer" className="AboutButton">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
