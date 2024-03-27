import PropTypes from 'prop-types';

import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from 'react-router-dom';

const ReadBooks = ({ book }) => {
    const { image, tags, bookName, bookId, author, category, publisher, yearOfPublishing, rating, totalPages } = book;
    
    return (
        <div className="border-2 flex lg:flex-row flex-col gap-7 rounded-xl p-6">

            <div className=" flex items-center justify-center">
                <img className=" w-52 h-60 bg-base-200 p-3 rounded-xl" src={image} alt="" />
            </div>

            <div>
                <div className="border-b-2 pb-4">
                    <h3 className="text-2xl font-semibold">{bookName}</h3>
                    <p className="font-medium mt-4"> <span>By : </span>{author}</p>
                    <div className="flex gap-5 mt-4 w-full">

                        <p className="font-bold">Tag</p>

                        <p className=" p-1 flex justify-center items-center rounded-full  text-green-500 text-[16px] px-3  font-medium bg-[#23BE0A0D]">{tags[0]}</p>
                        <p className=" p-1 flex justify-center items-center rounded-full text-green-500 text-[16px] px-3 font-medium bg-[#23BE0A0D]">{tags[1]}</p>

                        <div className="flex items-center">
                            <p><MdOutlineLocationOn className="text-xl"></MdOutlineLocationOn></p> <p className="ml-3">Year of Publishing : </p> <p className="ml-2">{yearOfPublishing}</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center  mt-5 gap-5">
                        <div className="flex items-center">
                            <p className="text-xl"><HiOutlineUsers></HiOutlineUsers></p>
                            <p className="ml-3">Publisher : {publisher}</p>
                        </div>

                        <div className="flex items-centerx">
                            <p className="text-xl"><MdOutlineContactPage></MdOutlineContactPage></p>
                            <p className="ml-3">Page : {totalPages}</p>
                        </div>
                    </div>
                </div>

                <div className="flex mt-4 gap-3 items-center text-lg">
                    <p className="bg-blue-100 text-blue-400 px-3 rounded-full py-1 ">Category : {category}</p>
                    <p className="bg-orange-100 text-orange-400 px-3 rounded-full py-1 ">Rating : {rating}</p>
                    <Link to={`/book/${bookId}`}><button className="bg-green-500 hover:bg-slate-200 hover:text-black  text-white px-3 rounded-full  py-1 ">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

ReadBooks.propTypes = {
    book: PropTypes.object
}

export default ReadBooks;