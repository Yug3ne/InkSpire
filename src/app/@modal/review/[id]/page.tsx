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
      <div className="flex flex-col gap-4 bg-gray-600 w-[600px] h-[400px] p-5">
        {/* top right */}
        <div className="flex justify-between">
          {/* small image on the left*/}
          <div className=" flex gap-4">
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
          {/* something feels right being added here */}
          <div className="flex justify-center">
            <span className="text-lg">Overall Rating: 4.5</span>
            {/* Will think of something */}
          </div>
        </div>
        <form action="" className="flex flex-col gap-4 mt-8">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/images/MyProfile.jpg"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <textarea
              name="desc"
              placeholder="What do you think of this book"
              className="bg-transparent outline-none placeholder:text-textGray text-xl"
            />
          </div>
          <button className="bg-white text-black font-bold rounded-full py-2 px-4">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
