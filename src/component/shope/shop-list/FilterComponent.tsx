"use client";
import React, { useState } from "react";

type CheckboxOption = {
  id: string;
  label: string;
  count: number;
};

const FilterComponent: React.FC = () => {
  // Define checkbox options
  const colors: CheckboxOption[] = [
    { id: "exampleCheckbox1", label: "Red", count: 56 },
    { id: "exampleCheckbox2", label: "Green", count: 78 },
    { id: "exampleCheckbox3", label: "Blue", count: 54 },
  ];

  const conditions: CheckboxOption[] = [
    { id: "exampleCheckbox11", label: "New", count: 1506 },
    { id: "exampleCheckbox21", label: "Refurbished", count: 27 },
    { id: "exampleCheckbox31", label: "Used", count: 45 },
  ];

  // Track checked states
  const [checkedColors, setCheckedColors] = useState<string[]>([]);
  const [checkedConditions, setCheckedConditions] = useState<string[]>([]);

  const handleCheckboxChange = (
    id: string,
    checked: boolean,
    setChecked: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setChecked((prev) =>
      checked ? [...prev, id] : prev.filter((checkedId) => checkedId !== id)
    );
  };

  return (
    <div className="list-group">
      <div className="list-group-item mb-10 mt-10">
        <label className="fw-900">Color</label>
        <div className="custome-checkbox">
          {colors.map((color) => (
            <div key={color.id}>
              <input
                className="form-check-input"
                type="checkbox"
                name="color"
                id={color.id}
                checked={checkedColors.includes(color.id)}
                onChange={(e) =>
                  handleCheckboxChange(
                    color.id,
                    e.target.checked,
                    setCheckedColors
                  )
                }
              />
              <label className="form-check-label" htmlFor={color.id}>
                <span>{`${color.label} (${color.count})`}</span>
              </label>
            </div>
          ))}
        </div>

        <label className="fw-900 mt-15">Item Condition</label>
        <div className="custome-checkbox">
          {conditions.map((condition) => (
            <div key={condition.id}>
              <input
                className="form-check-input"
                type="checkbox"
                name="condition"
                id={condition.id}
                checked={checkedConditions.includes(condition.id)}
                onChange={(e) =>
                  handleCheckboxChange(
                    condition.id,
                    e.target.checked,
                    setCheckedConditions
                  )
                }
              />
              <label className="form-check-label" htmlFor={condition.id}>
                <span>{`${condition.label} (${condition.count})`}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
