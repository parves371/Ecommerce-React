// components/ProductTabs.tsx
import React, { useState } from "react";
import TabNav from "./TabNav";
import DescriptionTab from "./DescriptionTab";
import AdditionalInfoTab from "./AdditionalInfoTab";
import ReviewsTab from "./ReviewsTab";

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="tab-style3">
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="tab-content shop_info_tab entry-main-content">
        {activeTab === "Description" && <DescriptionTab />}
        {activeTab === "Additional-info" && <AdditionalInfoTab />}
        {activeTab === "Reviews" && <ReviewsTab />}
      </div>
    </div>
  );
};

export default ProductTabs;
