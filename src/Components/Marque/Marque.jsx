import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Marque = () => {
    return (
        <div className="w-3/4 mx-auto flex bg-slate-200 rounded-lg mt-3">
        <button className="text-base font-medium text-white bg-red-500 px-3 py-1 rounded-lg">Latest</button>
      
        <Marquee pauseOnHover={true} speed={50}>
            <Link className='mr-8' to='/'>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Link>

            <Link className='mr-8' to='/'>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Link>
             
            <Link className='mr-8' to='/'>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Link>
        </Marquee>
            
      </div>
    );
};

export default Marque;