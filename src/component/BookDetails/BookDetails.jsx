import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookRead, saveWishlistBook } from "../../Utility/LocalStorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const book = books.find(book => book.bookId === idInt)
    const { image, tags, bookName, author, category, publisher, yearOfPublishing, rating, review, totalPages } = book;

    const handleRead = () => {
        saveBookRead(idInt)
    }

    const handleWishlist = () => {
        saveWishlistBook(idInt)
    }


    // console.log(book);
    return (

        <div>
            <div className="flex flex-col lg:flex-row gap-12 p-6">
                <div className="bg-base-200 p-12 flex-1 flex justify-center items-center rounded-xl">
                    <img className="w-80" src={image} alt="" />
                </div>

                <div className="flex-1">
                    <div>
                        <h3 className="text-[40px] font-bold font-playfair">{bookName}</h3>
                        <p className="text-[20px] font-medium mt-5">{author}</p>
                        <p className="text-[20px] font-medium border-y-2 py-3 mt-5">{category}</p>
                        <p className="text-[16px] mt-6"> <span className="font-bold">Review : </span>{review}</p>

                        <div className="flex gap-5 mt-3 py-6 w-2/3">
                            <p className="font-bold">Tag</p>

                            <p className=" p-1 flex justify-center items-center rounded-full  text-green-500 text-[16px] flex-1 font-medium bg-[#23BE0A0D]">{tags[0]}</p>
                            <p className="p-1 flex justify-center items-center rounded-full text-green-500 text-[16px] flex-1 font-medium bg-[#23BE0A0D]">{tags[1]}</p>
                        </div>
                    </div>

                    <div className="space-y-3 border-t-2 py-6">
                        <div className="flex">
                            <p className="w-36 mr-10">Number of Pages : </p>
                            <p className="font-semibold">{totalPages}</p>
                        </div>
                        <div className="flex">
                            <p className="w-36 mr-10">Publisher : </p>
                            <p className="font-semibold">{publisher}</p>
                        </div>
                        <div className="flex">
                            <p className="w-36 mr-10">Year of Publishing : </p>
                            <p className="font-semibold">{yearOfPublishing}</p>
                        </div>
                        <div className="flex">
                            <p className="w-36 mr-10">Rating : </p>
                            <p className="font-semibold">{rating}</p>
                        </div>
                    </div>

                    <div>
                        <button onClick={handleRead} className="btn btn-success">Read</button>
                        <button onClick={handleWishlist} className="btn btn-primary ml-4">Wishlist</button>
                        <Link to={-1}><button className="btn btn-primary ml-4">Go back</button></Link>
                    </div>
                    <ToastContainer />
                </div>
            </div>




        </div>
    );
};

export default BookDetails;