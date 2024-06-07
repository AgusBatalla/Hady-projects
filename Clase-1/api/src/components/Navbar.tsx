import { BiHomeAlt2, BiTv, BiUser } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import styles from "@styles/modules/Navbar.module.scss";

type NavbarLinkProps = {
  to: string;
  Icon: any;
  name: string;
  className?: string;
  disabled?: boolean;
};

const links = [
  {
    to: "/",
    Icon: BiHomeAlt2,
    name: "Inicio",
  },
  {
    to: "/miembros",
    Icon: BiUser,
    name: "Miembros",
  },
  {
    to: "/experiencias",
    Icon: BiTv,
    name: "Experiencias",
  },
];

const NavbarLink = ({
  to,
  Icon,
  name,
  className,
  disabled,
}: NavbarLinkProps) => {
  return (
    <NavLink
      to={to}
      className={`nav-link ${({ isActive }: any) =>
        isActive ? "active" : ""} ${className ?? ""}`}
      unselectable={disabled ? "on" : "off"}
      key={name}
    >
      <Icon /> {name}
    </NavLink>
  );
};

const NavbarToggler = () => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="https://img.freepik.com/fotos-premium/foto-extrema-ilustracion-carreras-motos-racha-luz-silueta-motociclista-automovilismo_646510-4561.jpg?w=360" alt="" height="40" />
        </Link>
        <NavbarToggler />
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-3 mb-md-1">
            {links.map((link) => (
              <li className="nav-item" key={link.name}>
                <NavbarLink {...link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
