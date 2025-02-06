import Image from "next/image";
import BookCard from "@/components/BookCard";

const Profile = () => {
    return (
        <main className='flex flex-col md:flex-row md:gap-8 mt-5 '>
            {/*  profile card on the left*/}
            <section className="flex flex-col gap-4 mt-8 items-center ">
                <div className="flex items-center gap-4">
                    <Image
                        src="/images/MyProfile.jpg"
                        alt=""
                        width={75}
                        height={75}
                        className="rounded-full "
                    />
                    <div className="flex flex-col">
                        <span className="text-sm ">Username</span>
                        <h1 className="text-lg">John Doe</h1>
                        <span className="text-sm text-blue-300">johndoe@gmail.com</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold">Interests</h1>
                    <span className="text-blue-300">Thriller, Suspense, Drama, Comedy</span> <br/>
                </div>
            </section>
            {/* books on the saved to readlist*/}
            <section className="flex flex-1 flex-col ">
                <h1 className="text-center font-bold text-2xl">My Read List</h1>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                </div>
            </section>
        </main>
    )
}

export default Profile