"use client";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import Image from "next/image";

const ReviewModal = () => {
  const router = useRouter();

  const closeModal = useCallback(() => {
    router.back();
  }, [router]);

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
      className="absolute w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex items-center justify-center "
      onClick={handleClickOutside}
    >
      <X
        className="absolute right-[480px] bottom-[620px]"
        onClick={closeModal}
      />
      <div className="flex flex-col bg-gray-600 w-[600px] h-[600px]">
        {/* top right */}
        <h1 className="p-5 text-2xl text-black">Create a Review</h1>
        <div className="px-5 flex gap-4">
          {/* small image on the left*/}
          <Image
            src="/images/bookcover.jpg"
            alt="bookcover"
            width={70}
            height={90}
          />
          <div className="flex flex-col mt-5">
            <span className="text-lg text-black ">John Doe</span>
            <span className="text-lg text-black ">Thriller/Suspense</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
