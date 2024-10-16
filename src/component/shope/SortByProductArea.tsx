"use client";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faAngleDown,
  faSort,
} from "@fortawesome/free-solid-svg-icons";

const SortByProductArea: React.FC = () => {
  const [isShowDropdownOpen, setIsShowDropdownOpen] = useState<boolean>(false);
  const [isSortByDropdownOpen, setIsSortByDropdownOpen] =
    useState<boolean>(false);
  const [selectedShowOption, setSelectedShowOption] = useState<number | string>(
    50
  );
  const [selectedSortOption, setSelectedSortOption] =
    useState<string>("Featured");

  const showOptions: (number | string)[] = [50, 100, 150, 200, "All"];
  const sortByOptions: string[] = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "Release Date",
    "Avg. Rating",
  ];

  // Refs to detect outside click
  const showDropdownRef = useRef<HTMLDivElement>(null);
  const sortByDropdownRef = useRef<HTMLDivElement>(null);

  const toggleShowDropdown = (): void =>
    setIsShowDropdownOpen(!isShowDropdownOpen);

  const toggleSortByDropdown = (): void =>
    setIsSortByDropdownOpen(!isSortByDropdownOpen);

  const handleShowOptionClick = (option: number | string): void => {
    setSelectedShowOption(option);
    setIsShowDropdownOpen(false); // Close the dropdown after selection
  };

  const handleSortOptionClick = (option: string): void => {
    setSelectedSortOption(option);
    setIsSortByDropdownOpen(false); // Close the dropdown after selection
  };

  // Handle outside click to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showDropdownRef.current &&
        !showDropdownRef.current.contains(event.target as Node)
      ) {
        setIsShowDropdownOpen(false);
      }

      if (
        sortByDropdownRef.current &&
        !sortByDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSortByDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sort-by-product-area" style={{ display: "flex" }}>
      {/* Show Dropdown */}
      <div
        className="sort-by-cover mr-10"
        style={{ position: "relative", cursor: "pointer" }}
        ref={showDropdownRef} // Ref to detect outside click
      >
        <div className="sort-by-product-wrap" onClick={toggleShowDropdown}>
          <div className="sort-by">
            <span>
              <FontAwesomeIcon icon={faThLarge} /> Show:
            </span>
          </div>
          <div className="sort-by-dropdown-wrap">
            <span>
              {selectedShowOption} <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </div>
        </div>

        {/* Show Options - Conditionally Render the Dropdown */}
        {isShowDropdownOpen && (
          <ul style={{ ...dropdownStyle }}>
            {showOptions.map((option) => (
              <li
                key={option}
                onClick={() => handleShowOptionClick(option)}
                style={{
                  ...dropdownItemStyle,
                  backgroundColor:
                    option === selectedShowOption ? "#088178" : "white", // Active background color
                  color: option === selectedShowOption ? "white" : "black", // Active text color
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Sort By Dropdown */}
      <div
        className="sort-by-cover"
        style={{ position: "relative", cursor: "pointer" }}
        ref={sortByDropdownRef} // Ref to detect outside click
      >
        <div className="sort-by-product-wrap" onClick={toggleSortByDropdown}>
          <div className="sort-by">
            <span>
              <FontAwesomeIcon icon={faSort} /> Sort by:
            </span>
          </div>
          <div className="sort-by-dropdown-wrap">
            <span>
              {selectedSortOption} <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </div>
        </div>

        {/* Sort By Options - Conditionally Render the Dropdown */}
        {isSortByDropdownOpen && (
          <ul style={dropdownStyle}>
            {sortByOptions.map((option) => (
              <li
                key={option}
                onClick={() => handleSortOptionClick(option)}
                style={{
                  ...dropdownItemStyle,
                  backgroundColor:
                    option === selectedSortOption ? "#088178" : "white", // Active background color
                  color: option === selectedSortOption ? "white" : "black", // Active text color
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// Styles for dropdown list
const dropdownStyle: React.CSSProperties = {
  position: "absolute",
  top: "100%",
  left: 0,
  backgroundColor: "white",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "8px 0",
  marginTop: "5px",
  width: "100%",
  zIndex: 1000,
  listStyle: "none",
};

// Base style for dropdown items
const dropdownItemStyle: React.CSSProperties = {
  padding: "8px 16px",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  fontSize: "14px",
};

export default SortByProductArea;
