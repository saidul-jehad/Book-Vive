import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/listedBooks'>Listed Books </NavLink></li>
        <li><NavLink to='/PToRead'>Pages to Read</NavLink></li>
        <li><NavLink to='/onlyBooks'>Books</NavLink></li>
        <li><NavLink to='/aboutUs'>About Us</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl  lg:font-bold font-medium lg:text-3xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5">
                            {
                                links
                            }
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <a className="btn btn-success text-white">Sign In</a>
                    <a className="btn btn-primary text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;