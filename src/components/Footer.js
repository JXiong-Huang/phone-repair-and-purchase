import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer>
      <div className="padT4 padB4">
        <div className="container mobile-container">
          <div className={theme === "light" ? "" : "text-info"}>
            <p>
              We are a start-up company aiming at providing door-to-door service
              to people who want to get their mobile phones fixed on site.
              Additionally we sell premium pre-owned devices that are strickly
              tested.
            </p>
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            <p>&copy; PhoneSaver 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
