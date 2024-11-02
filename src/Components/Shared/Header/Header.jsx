import headerLogo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="text-center">
        <img className="mx-auto" src={headerLogo} alt="" />
        <p className="text-[#706F6F] text-base font-normal">
          Journalism Without Fear or Favour
        </p>
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
      </div>
      {/* Breaking News */}
      <div className="w-3/4 mx-auto flex bg-slate-200">
        <button className="text-base font-medium text-white bg-red-500 px-3 py-1 rounded-lg">Latest</button>
      
        <Marquee pauseOnHover={true} speed={100}>
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
    </>
  );
};

export default Header;
