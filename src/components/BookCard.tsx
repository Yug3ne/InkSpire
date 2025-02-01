import Image from "next/image";
import Link from "next/link"

const BookCard = () => {
  return (
    <Link href='/book/1' className="flex items-center flex-col mt-5">
      {/* image */}
      <div className="">
        <Image
          src="/images/bookcover.jpg"
          alt="Book Image"
          width={250}
          height={50}
        />
      </div>
      <div>
        <p>
          <span className="font-semibold text-light-200 text-lg">
            Dany Brown
          </span>
        </p>
        <p>
          <span className="font-semibold text-light-200">
            Thriller/Suspense
          </span>
        </p>

        <div className="flex flex-row gap-1">
          <Image src="/icons/star.svg" alt="star" width={22} height={22} />
          <p>5.5</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
