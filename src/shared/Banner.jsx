import { BsArrowRight } from "react-icons/bs";
import './Banner.css'

const Banner = () => {
    return (
            <div className=" items-center mb-20 grid sm:grid-cols-2 lg:grid-cols-1"
            style={{backgroundImage: `url("../../public/banner.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',}}

            >
                <div className="lg:flex text-white font-semibold grid sm:grid-cols-2 lg:grid-cols-1 sm: bg-gray-900 lg:bg-transparent sm: p-5 ">
                    <h1 className="text-3xl font-semibold font-serif lg: ms-10">Aesop</h1>
                    <div className="lg: ms-10 ">
                        <p className="mb-7"> Bar Soaps</p>
                        <h2 className="text-3xl mb-7">A body care classic, <br /> reimagined </h2>
                        <p className="mb-7">Breathing new life into the humble bar soap are <br /> Nurture, Polish and Refresh—three additions to the <br /> range, each imparting a unique constellation of <br /> benefits.</p>
                        <button id="discover-button" className="flex items-center text-lg py-3 px-5 border font-semibold">
                           <span className="me-5">Discover Bar Soaps</span><BsArrowRight/>
                        </button>
                    </div>
                </div>
        </div>
        
    );
};

export default Banner;