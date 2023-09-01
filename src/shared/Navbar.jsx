import { useState } from "react";



const Navbar = () => {

const [isMenuOpen , setMenuOpen] = useState(false);

const toggleMenu =() => {
    setMenuOpen(!isMenuOpen);
}

    return (
        <div>
            {/* footer section */}
            <div className=" items-center bg-stone-500 p-4 text-white">
                <div className="items-center">
                    <p className='text-center'>Trained Aesop consultations are available to provide bespoke skin care advise. <span className="ms-3">Book a video consultation</span></p>
                </div>
            </div>
            <div className=" items-center bg-black p-4 text-white">
                <div className="items-center text-center">
                    <span>Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400</span>
                </div>
            </div>



            {/* Navbar section  */}
            <div className="flex justify-between bg-white p-5">
                <div className="menu menu-horizontal">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        fill="none" 
                        viewBox="0 0 24 24"
                         stroke="currentColor"
                         onClick={toggleMenu}
                         >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                    </label>
                    <ul tabIndex={0} className={ isMenuOpen ? "" : "hidden"}>
                        <li className="btn btn-ghost" title="Skin Care">Skin Care</li>
                        <li className="btn btn-ghost" title="Body & Hand">Body & Hand</li>
                        <li className="btn btn-ghost" title="Hair">Hair</li>
                        <li className="btn btn-ghost" title="Fragrance">Fragrance</li>
                        <li className="btn btn-ghost" title="Home">Home</li>
                        <li className="btn btn-ghost" title="Kits & Travel">Kits & Travel</li>
                        <li className="btn btn-ghost" title="Gift">Gift</li>
                        <li className="btn btn-ghost" title="Read">Read</li>
                        <li className="btn btn-ghost" title="Stores">Stores</li>
                        <li className="btn btn-ghost" title="">Facial Appointments</li>
                        <button className="btn-ghost btn-ghost-ghost btn-ghost-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </ul>
                </div>
                <div>
                    <ul className="flex">
                        <li className="btn btn-ghost" title="Login">Login</li>
                        <li className="btn btn-ghost" title="Cabinet">Cabinet</li>
                        <li className="btn btn-ghost" title="Cart">Cart</li>
                    </ul>
                </div>

            </div>

            
        </div>
    );
};

export default Navbar;