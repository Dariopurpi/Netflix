import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src="../../public/netflix-logo-icon.svg" alt="logo netflix" />
        <ul>
          <li>
            <img src="../../public/icons8-scaricare-32.png" alt="" />
          </li>
          <li>
            <img src="../../public/icons8-ricerca-50.png" alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
