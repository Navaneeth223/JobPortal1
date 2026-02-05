import { NavLink } from "react-router-dom";

const NavLinks = ({ className = "" }) => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/features", label: "Features" },
    { to: "/components", label: "Components" },
    { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <ul className={`flex items-center gap-6 ${className}`.trim()}>
      {links.map((link) => (
        <li key={link.to}>
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              `text-sm uppercase tracking-wide transition ${
                isActive ? "text-white" : "text-white/70 hover:text-white"
              }`
            }
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
