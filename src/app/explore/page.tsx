"use client";
import { lazy, Suspense, useState } from "react";
import { Search, Menu, X } from "lucide-react";


// Placeholder data for books with genres
const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Science Fiction",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 5,
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 6,
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical Fiction",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 7,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 8,
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    genre: "Modernist",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 9,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 10,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Science Fiction",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 11,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Thriller",
    image: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 12,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Young Adult",
    image: "/placeholder.svg?height=300&width=200",
  },
];

// Extract unique genres from books
const genres = Array.from(new Set(books.map((book) => book.genre)));

const BookCard = lazy(() => import('@/components/BookCard'))

const BookLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");


  // Filter books based on search term and selected genre
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedGenre || book.genre === selectedGenre)
  );

  return (
    <div className="flex flex-col md:flex-row  text-white">
      {/* Sidebar */}
      <aside
        className={` hidden md:block w-64 p-6  inset-y-0 left-0 transform  `}
      >
        <h2 className="text-2xl font-bold mb-6 text-[#0070f3]">Filters</h2>
        <div className="mb-6">
          <label
            htmlFor="search"
            className="block text-sm font-medium mb-2 text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="text"
              id="search"
              className="w-full bg-[#1a1a1a] rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#0070f3]"
              placeholder="Search books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div>
          <label
            htmlFor="genre"
            className="block text-sm font-medium mb-2 text-gray-300"
          >
            Genre
          </label>
          <select
            id="genre"
            className="w-full bg-[#1a1a1a] rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#0070f3]"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <Suspense key={book.id} fallback={<BookCardSkeleton/>}>
              <BookCard />
            </Suspense>
          ))}
        </div>
      </main>
    </div>
  );
};

const BookCardSkeleton: React.FC = () => (
  <div className="bg-[#111111] rounded-lg shadow-lg overflow-hidden flex flex-col animate-pulse">
    <div className="relative h-64 sm:h-72 bg-gray-700"></div>
    <div className="p-4 flex-1 flex flex-col justify-between">
      <div>
        <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
      </div>
      <div className="h-4 bg-gray-700 rounded w-1/3 mt-4"></div>
    </div>
  </div>
)

export default BookLibrary;


