import { ThemeContext } from "../contexts/ThemeContext";
import { PhoneFilterContext } from "../contexts/PhoneFilterContext";
import { useContext } from "react";

function PhonesToolbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const {
    showDescription,
    setShowDescription,
    model,
    setModel,
    setSearchQuery,
    IPHONE_MODELS,
  } = useContext(PhoneFilterContext);

  return (
    <section className="toolbar dark-theme-header">
      <div className="container">
        <div className="justify-content-between">
          <ul className="toolrow d-flex flex-column flex-lg-row">
            <li className="d-flex flex-column flex-md-row">
              <b>Show Features&nbsp;&nbsp;</b>
              <label className="fav">
                <input
                  type="checkbox"
                  checked={showDescription}
                  onChange={(e) => {
                    setShowDescription(e.target.checked);
                  }}
                />
                <span className="switch"></span>
              </label>
            </li>
            <li className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
              <strong>Theme</strong>
              <label className="dropdown">
                <select
                  className="form-control theme"
                  value={theme}
                  onChange={(e) => {
                    setTheme(e.target.value);
                  }}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </label>
            </li>
            <li>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here"
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                />
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="button">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </li>
            <li className="d-flex flex-column flex-md-row">
              <strong>Model</strong>
              <label className="dropmenu">
                <select
                  className="form-control"
                  value={model}
                  onChange={(e) => {
                    setModel(e.target.value);
                  }}
                >
                  {IPHONE_MODELS.map((model) => {
                    return (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    );
                  })}
                </select>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PhonesToolbar;
