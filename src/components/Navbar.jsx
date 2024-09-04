import { useState } from "react";
import "../style/Navbar.scss";
import logoNetflix from "../assets/netflix-logo-icon.svg";
import logoDownload from "../assets/download.png";
import logoSearch from "../assets/search.png";
import home from "../assets/home.png";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

function Navbar({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggle = () => {
    setIsModalOpen((prevState) => !prevState);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            <img onClick={toggle} src={logoSearch} alt="logo search" />
          </li>
        </ul>
      </div>
      <Modal show={isModalOpen} handleClose={closeModal} data={data} />
    </>
  );
}

export default Navbar;
