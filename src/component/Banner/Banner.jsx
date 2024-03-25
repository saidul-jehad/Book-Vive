import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div> 
            <div className="hero bg-base-200 rounded-2xl lg:h-[550px] lg:px-32">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src="../../../public/images/BannerBook.png" className="max-w-sm" />
                    <div>
                        <p className="py-6 text-6xl font-bold mb-10">Books to freshen up your bookshelf</p>
                       
                        <Link to='/listedBooks'><button className="btn text-white btn-success">Viw The List</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;