import { arraylinkList } from "./LinksList";
import "./Search-menu.css";
export const SearchMenu = () => {
  return (
    <div className="search-menu-main-container">
      <di className="side-bar-container">
        <h1 className="sidebar-heading">Menu</h1>
        <input
          type="text"
          className="side-bar-input"
          placeholder="Search here..."
        />{" "}
        {arraylinkList.map((item) => {
          return (
            <div className="side-bar-links-container">
              <li className="side-bar-links">{item}</li>
            </div>
          );
        })}
      </di>
      <div className="search-menu-contents">page content</div>
    </div>
  );
};
