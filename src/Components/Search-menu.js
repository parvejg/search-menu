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
      </di>
      <div className="search-menu-contents">page content</div>
    </div>
  );
};
