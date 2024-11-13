// components/ProductTabs.tsx
import React, { useState } from "react";
import TabNav from "./TabNav";
import DescriptionTab from "./DescriptionTab";
import AdditionalInfoTab from "./AdditionalInfoTab";
import ReviewsTab from "./ReviewsTab";

interface TabNavProps {
  id: number;
}
const ProductTabs: React.FC<TabNavProps> = ({ id }) => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="tab-style3">
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="tab-content shop_info_tab entry-main-content">
        {activeTab === "Description" && <DescriptionTab />}
        {activeTab === "Additional-info" && <AdditionalInfoTab />}
        {activeTab === "Reviews" && <ReviewsTab id={id} />}
      </div>
    </div>
  );
};

export default ProductTabs;
