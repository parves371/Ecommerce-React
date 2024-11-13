// components/AdditionalInfoTab.tsx
import React from "react";

const AdditionalInfoTab: React.FC = () => (
  <div className="tab-pane fade show active" id="Additional-info">
    <table className="font-md">
      <tbody>
        <tr className="stand-up">
          <th>Stand Up</th>
          <td>
            <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
          </td>
        </tr>
        <tr className="folded-wo-wheels">
          <th>Folded (w/o wheels)</th>
          <td>
            <p>32.5″L x 18.5″W x 16.5″H</p>
          </td>
        </tr>
        <tr className="folded-wo-wheels">
          <th>Folded (w/ wheels)</th>
          <td>
            <p>32.5″L x 24″W x 18.5″H</p>
          </td>
        </tr>
        <tr className="folded-wo-wheels">
          <th>Folded Door Pass Through</th>
          <td>
            <p>24</p>
          </td>
        </tr>
        <tr className="folded-wo-wheels">
          <th>Frame</th>
          <td>
            <p>Aluminum</p>
          </td>
        </tr>
        <tr className="folded-wo-wheels">
          <th>Weight (w/o wheels)</th>
          <td>
            <p>20 LBS</p>
          </td>
        </tr>
        <tr className="folded-wo-wheels">
          <th>Weight Capacity</th>
          <td>
            <p>60 LBS</p>
          </td>
        </tr>
        <tr className="folded-wo-wheels">
          <th>Width</th>
          <td>
            <p>24″</p>
          </td>
        </tr>
        <tr className="folded-wo-wheels">
          <th>Handle height (ground to handle)</th>
          <td>
            <p>37-45″</p>
          </td>
        </tr>
        <tr className="folded-wo-wheels">
          <th>Wheels</th>
          <td>
            <p>12″ air / wide track slick tread</p>
          </td>
        </tr>
        <tr className="folded-wo-wheels">
          <th>Seat back height</th>
          <td>
            <p>21.5″</p>
          </td>
        </tr>
        <tr className="folded-wo-wheels">
          <th>Head room (inside canopy)</th>
          <td>
            <p>25″</p>
          </td>
        </tr>
        <tr className="folded-wo-wheels">
          <th>Color</th>
          <td>
            <p>Black, Blue, Red, White</p>
          </td>
        </tr>
        <tr className="folded-wo-wheels">
          <th>Size</th>
          <td>
            <p>M, S</p>
          </td>
        </tr>
        {/* Other specifications */}
      </tbody>
    </table>
  </div>
);

export default AdditionalInfoTab;
