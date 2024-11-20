import React, { useState } from "react";
import { QuikView } from "./Quickview";

const ProductModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    console.log("close");
  };

  return (
    <div>
      <button onClick={openModal} className="px-4 py-2 bg-blue-500 text-white">
        Open Product Modal
      </button>
      <QuikView isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ProductModal;
