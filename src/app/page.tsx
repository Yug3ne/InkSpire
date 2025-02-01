import BookCard from "@/components/BookCard";
import { SquareChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <section className="flex gap-5 flex-col mt-7">
      {/* book oberview */}
      <div className="flex gap-8 flex-col md:flex-row">
        {/* book its sself */}
        <div className="flex flex-1 gap-4 flex-col w-full md:w-2/3">
          <h1 className=" text-5xl font-semibold text-white md:text-7xl">
            The Origin
          </h1>

          <div className="mt-7 flex flex-row flex-wrap gap-4 text-xl text-light-100">
            <p>
              By{" "}
              <span className="font-semibold text-light-200">Dany Brown</span>
            </p>

            <p>
              Category{" "}
              <span className="font-semibold text-light-200">
                Thriller/Suspense
              </span>
            </p>

            <div className="flex flex-row gap-1">
              <Image src="/icons/star.svg" alt="star" width={22} height={22} />
              <p>5.5</p>
            </div>
            <p className="mt-2 text-justify text-xl text-light-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              itaque esse eos eveniet sunt magnam. Voluptate velit, voluptas
              enim porro, reiciendis magni laudantium cum suscipit hic harum
              tempore vitae dolorum nulla fuga facilis ipsa deleniti nesciunt
              corporis assumenda et eligendi.
            </p>
            <Link href='/review/1' className="bg-blue-400 rounded-lg flex items-center gap-5 p-3">
              <Image src="/icons/book.svg" alt="Book" width={30} height={30} />
              Leave a Review
            </Link>
            <Link href='/explore' className="bg-blue-400 rounded-lg flex items-center gap-5 p-3">
            <SquareChevronRightIcon fill="black" size={30} />
              See More
            </Link>
          </div>
        </div>
        {/* imaged of the book */}
        <div className="w-full md:w-1/3 flex flex-1 justify-center">
          <div className="relative">
            <Image
              src="/images/bookcover.jpg"
              alt="The Origin"
              width={400}
              height={600}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      {/* book list of some recommendation */}
      <div className=" mt-5 w-full">
        <h1 className="text-2xl font-semibold text-white md:text-3xl">
          Popular Books
        </h1>
        <div className="w-full items-center md:flex flex-wrap gap-8">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />

        </div>
      </div>
    </section>
  );
};

export default Home;
