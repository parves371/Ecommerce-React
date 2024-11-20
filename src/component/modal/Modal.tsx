interface BootstrapModalProps {
  isOpen: boolean; // Determines if the modal is open
  onClose: () => void; // Function to close the modal
  title?: string; // Modal title
  children: React.ReactNode; // Modal content
}

const BootstrapModal: React.FC<BootstrapModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <div
      className={`modal fade ${isOpen ? "show d-block" : "d-none"}`}
      tabIndex={-1}
      role="dialog"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={onClose} // Close when clicking outside the modal
    >
      <div
        className="modal-dialog modal-lg"
        role="document"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose} // Close modal on button click
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BootstrapModal;
