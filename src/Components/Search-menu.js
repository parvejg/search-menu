import { useState } from "react";
import { arraylinkList } from "./LinksList";
import "./Search-menu.css";
import { Paragraph } from "./Paragraph";
export const SearchMenu = () => {
  const [inputValue, setInputValue] = useState("");

  const filteredData = arraylinkList.filter((item) =>
    item.toLowerCase().includes(inputValue.toUpperCase())
  );

  return (
    <div className="side-bar-container">
      <h2 className="sidebar-heading">Search Menu</h2>
      <input
        type="text"
        className="side-bar-input"
        placeholder="Search here..."
        onKeyUp={(e) => setInputValue(e.target.value)}
      />
      {filteredData.map((item) => {
        return (
          <div className="side-bar-links-container">
            <li className="side-bar-links">{item}</li>
          </div>
        );
      })}
    </div>
  );
};
