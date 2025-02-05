import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

// This would typically come from a database or API
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  category: "Classic Literature",
  pages: 180,
  description:
    "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
  coverImage: "/placeholder.svg?height=600&width=400",
  reviews: [
    {
      id: 1,
      author: "John Doe",
      rating: 5,
      text: "A timeless classic that never fails to captivate.",
    },
    {
      id: 2,
      author: "Jane Smith",
      rating: 4,
      text: "Beautifully written, though the characters can be frustrating at times.",
    },
    {
      id: 3,
      author: "Bob Johnson",
      rating: 5,
      text: "Fitzgerald's prose is simply magical. A must-read!",
    },
  ],
};

export default function BookPage() {
  return (
    <div className=" text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex  justify-center md:justify-end">
            <Image
              src={"/images/bookCover.jpg"}
              alt={`Cover of ${book.title}`}
              width={300}
              height={450}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4 text-blue-400">
              {book.title}
            </h1>
            <p className="text-xl mb-4 text-gray-300">by {book.author}</p>
            <p className="mb-4 text-gray-400">
              <strong className="text-gray-200">Category:</strong>{" "}
              {book.category}
            </p>
            <p className="mb-4 text-gray-400">
              <strong className="text-gray-200">Number of Pages:</strong>{" "}
              {book.pages}
            </p>
            <p className="text-gray-300">{book.description}</p>
          </div>
          <Link
            href="/review/1"
            className="bg-blue-400 rounded-lg flex items-center md:ml-12 gap-5 p-3 w-[200px]"
          >
            <Image src="/icons/book.svg" alt="Book" width={30} height={30} />
            Leave a Review
          </Link>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Reviews</h2>
          <div className="grid gap-4">
            {book.reviews.map((review) => (
              <div
                key={review.id}
                className="border border-gray-700 p-4 rounded-lg bg-gray-800"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-gray-300">{review.author}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? "text-blue-400 fill-current"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-400">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
