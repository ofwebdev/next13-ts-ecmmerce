import { resetCart } from "@/store/nextSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import CustomModal from "./CustomModal";

const ResetCart = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleResetCart = () => {
    setIsModalOpen(true);
  };

  const confirmReset = () => {
    dispatch(resetCart());
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmReset}
      />

      <button
        onClick={handleResetCart}
        className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300"
      >
        Reset Cart
      </button>
    </div>
  );
};

export default ResetCart;
