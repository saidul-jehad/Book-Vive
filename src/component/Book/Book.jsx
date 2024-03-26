import { IoIosStarOutline } from "react-icons/io";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { image, tags, bookName, author, category, rating, bookId } = book;
    return (
        <div>
            <Link to={`/book/${bookId}`}>
                <div className="card bg-base-200 shadow-xl">
                    <figure className="p-7"><img className="rounded-xl" src={image} alt="Shoes" /></figure>
                    <div className="card-body">

                        <div className="flex gap-4">
                            <p className=" p-1 flex justify-center items-center rounded-full w-auto text-green-500 text-[16px] flex-1 font-medium bg-[#23BE0A0D]">{tags[0]}</p>
                             <p className="p-1 flex justify-center items-center rounded-full w-auto text-green-500 text-[16px] flex-1 font-medium bg-[#23BE0A0D]">{tags[1]}</p>
                        </div>
                        <h2 className="card-title mt-4">
                            {bookName}
                        </h2>
                        <p className="mt-2"> <span>By : </span>{author}</p>
                        <div className="card-actions justify-between border-t-2 border-dashed pt-5 mt-5">
                            <div className="badge badge-outline">{category}</div>
                            <div className="badge badge-outline">{rating} <span className="ml-1"> <IoIosStarOutline></IoIosStarOutline></span></div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;