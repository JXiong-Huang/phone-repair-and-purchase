import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <a href="/">
              <img
                src="/images/logo.jpg"
                alt="Home Page"
                width={100}
                height={50}
              />
            </a>
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            <h4 className="header-title">
              Get Your Phone Fixed Anywhere Anytime
            </h4>
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            Hello Mr. Jason &nbsp;&nbsp;
            <span>
              <a href="/">sign-out</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
