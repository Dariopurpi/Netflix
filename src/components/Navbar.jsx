import "../style/Navbar.scss";
import logoNetflix from "../assets/netflix-logo-icon.svg";
import logoDownload from "../assets/download.png";
import logoSearch from "../assets/search.png";
import home from "../assets/home.png";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <img src={logoNetflix} alt="logo netflix" />
          </li>
        </ul>

        <ul>
          <li>
            <Link to={"/"}>
              <img src={home} alt="logo netflix" />
            </Link>
          </li>
          <li>
            <img src={logoDownload} alt="logo download" />
          </li>
          <li>
            <img src={logoSearch} alt="logo search" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
