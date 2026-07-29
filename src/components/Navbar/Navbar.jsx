import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">

        <div className="logo">
          <h2>Wubalem.</h2>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;