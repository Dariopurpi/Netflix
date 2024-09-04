import "../style/Navbar.scss";
import logoNetflix from "../assets/netflix-logo-icon.svg";
import logoDownload from "../assets/download.png";
import logoSearch from "../assets/search.png";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={logoNetflix} alt="logo netflix" />
        <ul>
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
