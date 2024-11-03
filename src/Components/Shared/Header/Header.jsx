import headerLogo from "../../../assets/logo.png";
import moment from "moment";


const Header = () => {
  return (
    <>
      <div className="text-center">
        <img className="mx-auto" src={headerLogo} alt="" />
        <p className="text-[#706F6F] text-base font-normal my-2">
          Journalism Without Fear or Favour
        </p>
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
      </div>
      {/* Breaking News */}
      
    </>
  );
};

export default Header;
