import React from "react";

import ComparisonTable from "./ComparisonTable";
import Breadcrumb from "./Breadcrumb";

const Main: React.FC = () => {
  return (
    <main className="main">
      <Breadcrumb />

      <section className="mt-50 mb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ComparisonTable />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
