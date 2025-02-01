"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ReviewModal = () => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="absolute w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex items-center justify-center"
      onClick={handleClickOutside}
    >
      <div className="flex bg-gray-600 w-[600px] h-[600px]">modal</div>
    </div>
  );
};

export default ReviewModal;
