import React, { useState } from "react";

const SidebarFilter: React.FC = () => {
  const [price, setPrice] = useState([0, 100]); // Initial price range [min, max]
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedColors((prev) =>
      prev.includes(value)
        ? prev.filter((color) => color !== value)
        : [...prev, value]
    );
  };

  const handleConditionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedConditions((prev) =>
      prev.includes(value)
        ? prev.filter((condition) => condition !== value)
        : [...prev, value]
    );
  };
  setPrice([0, 100]);
  // const handlePriceChange = (event: any, newValue: number | number[]) => {
  //   if (Array.isArray(newValue)) {
  //     setPrice(newValue);
  //   }
  // };

  return (
    <div className="sidebar-widget price_range range mb-30">
      <div className="widget-header position-relative mb-20 pb-10">
        <h5 className="widget-title mb-10">Fill by price</h5>
        <div className="bt-1 border-color-1"></div>
      </div>

      {/* Price Range Slider */}
      <div className="price-filter">
        <div className="price-filter-inner">
          <div id="slider-range"></div>
          <div className="price_slider_amount">
            <div className="label-input">
              <span>Range:</span>
              <input
                type="text"
                id="amount"
                name="price"
                placeholder="Add Your Price"
                value={`${price[0]} - ${price[1]}`}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* Color Filters */}
      <div className="list-group">
        <div className="list-group-item mb-10 mt-10">
          <label className="fw-900">Color</label>
          <div className="custome-checkbox">
            <input
              className="form-check-input"
              type="checkbox"
              id="exampleCheckbox1"
              value="Red"
              onChange={handleColorChange}
              checked={selectedColors.includes("Red")}
            />
            <label className="form-check-label" htmlFor="exampleCheckbox1">
              <span>Red (56)</span>
            </label>
            <br />
            <input
              className="form-check-input"
              type="checkbox"
              id="exampleCheckbox2"
              value="Green"
              onChange={handleColorChange}
              checked={selectedColors.includes("Green")}
            />
            <label className="form-check-label" htmlFor="exampleCheckbox2">
              <span>Green (78)</span>
            </label>
            <br />
            <input
              className="form-check-input"
              type="checkbox"
              id="exampleCheckbox3"
              value="Blue"
              onChange={handleColorChange}
              checked={selectedColors.includes("Blue")}
            />
            <label className="form-check-label" htmlFor="exampleCheckbox3">
              <span>Blue (54)</span>
            </label>
          </div>

          {/* Item Condition Filters */}
          <label className="fw-900 mt-15">Item Condition</label>
          <div className="custome-checkbox">
            <input
              className="form-check-input"
              type="checkbox"
              id="exampleCheckbox11"
              value="New"
              onChange={handleConditionChange}
              checked={selectedConditions.includes("New")}
            />
            <label className="form-check-label" htmlFor="exampleCheckbox11">
              <span>New (1506)</span>
            </label>
            <br />
            <input
              className="form-check-input"
              type="checkbox"
              id="exampleCheckbox21"
              value="Refurbished"
              onChange={handleConditionChange}
              checked={selectedConditions.includes("Refurbished")}
            />
            <label className="form-check-label" htmlFor="exampleCheckbox21">
              <span>Refurbished (27)</span>
            </label>
            <br />
            <input
              className="form-check-input"
              type="checkbox"
              id="exampleCheckbox31"
              value="Used"
              onChange={handleConditionChange}
              checked={selectedConditions.includes("Used")}
            />
            <label className="form-check-label" htmlFor="exampleCheckbox31">
              <span>Used (45)</span>
            </label>
          </div>
        </div>
      </div>

      <a href="shop-grid-right.html" className="btn btn-sm btn-default">
        <i className="fi-rs-filter mr-5"></i> Filter
      </a>
    </div>
  );
};

export default SidebarFilter;
