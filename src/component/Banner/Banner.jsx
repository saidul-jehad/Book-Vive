import { Link } from "react-router-dom";
// import BannerImg from "../../../public/images/BannerBook.png"

const Banner = () => {
    return (
        <div> 
            <div className="hero bg-base-200 rounded-2xl mt-8 lg:h-[550px] lg:px-32">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src='https://i.ibb.co/Tqjc4wk/pngwing-1-1.png' className="w-72" />
                    <div>
                        <p className="py-6 lg:text-6xl text-3xl font-semibold lg:font-bold mb-10 font-playfair">Books to freshen up your bookshelf</p>
                       
                        <Link to='/listedBooks'><button className="btn text-white btn-success">Viw The List</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;