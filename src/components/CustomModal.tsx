interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const CustomModal = ({ isOpen, onClose, onConfirm }: CustomModalProps) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose} // Close modal when overlay is clicked
      />

      {/* Modal Content */}
      <div className="bg-white rounded-lg p-6 shadow-md relative">
        <p className="text-lg font-semibold mb-4">Confirm Reset</p>
        <p>Are you sure you want to reset your items from the cart?</p>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
