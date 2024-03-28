
import { IoIosStarOutline } from "react-icons/io";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const OnlyBook = ({book}) => {
    const { image, tags, bookName, author, category, rating, bookId } = book;
    return (
        <div>
            <Link to={`/book/${bookId}`}>
                <div className="card p-6 border-2">
                    <div className="bg-base-200 rounded-xl">
                        <figure className="p-7"><img className="rounded-xl " src={image} alt="Shoes" /></figure>
                    </div>
                    <div className="card-body px-0">

                        <div className="flex gap-4">
                            <p className=" p-1 flex justify-center items-center rounded-full w-auto text-green-500 text-[16px] flex-1 font-medium bg-[#23BE0A0D]">{tags[0]}</p>
                            <p className="p-1 flex justify-center items-center rounded-full w-auto text-green-500 text-[16px] flex-1 font-medium bg-[#23BE0A0D]">{tags[1]}</p>
                        </div>
                        <h2 className="card-title mt-4 font-playfair">
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

OnlyBook.propTypes={
    book: PropTypes.object
}

export default OnlyBook;