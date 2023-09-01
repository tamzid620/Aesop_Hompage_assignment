import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
    return (
        // <div style="background-image: url('');">
            <div 
            style={{backgroundImage: `url("../../public/banner.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'}}

            >
                <div className="flex text-white font-semibold">
                    <h1 className="text-3xl font-semibold font-serif ">AeSop</h1>
                    <div>
                        <span> Bar Soaps</span>
                        <h2 className="text-3xl">A body care classic, <br /> reimagined </h2>
                        <p>Breathing new life into the humble bar soap are <br /> Nurture, Polish and Refresh—three additions to the <br /> range, each imparting a unique constellation of <br /> benefits. </p>
                        <button style={{}} className="flex items-center text-lg font-thin py-3 px-5 border">
                           <span>Discover Bar Soaps</span> <span className="ms-3 text-white"><BsArrowRight/></span>
                        </button>
                    </div>
                </div>
        </div>
        
    );
};

export default Banner;