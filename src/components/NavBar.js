import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function NavBar() {
  const { theme } = useContext(ThemeContext);
  const NAV_BUTTON = [
    { Home: "" },
    { "On-Site Repair": "repair" },
    { "Pre-Owned Phones": "products" },
    { "Your Order": "cart" },
    { "About Us": "about" },
  ];
  return (
    <nav className="navbar-button">
      <ul>
        {NAV_BUTTON.map((b) => (
          <li key={Object.keys(b)}>
            <a
              className={theme === "light" ? "" : "text-info"}
              href={`/${Object.values(b)}`}
            >
              {Object.keys(b)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
