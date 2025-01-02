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
            <Link to="./About">
                      
                   
            <a href="#footer" className="AboutButton">
              About
            </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
