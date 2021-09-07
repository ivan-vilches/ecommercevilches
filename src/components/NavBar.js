import "./NavBar.css";
const NavBar = () => {
  return (
    <header className="header">
      <a href="" className="logo">
        Ecommerce Ivan Vilches
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#nosotros">Nosotros</a>
        </li>
        <li>
          <a href="#tienda">Tienda</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
