import Contents from "../../Components/Contents/Contents";
import LeftSideNav from "../../Components/Shared/LeftSideNav";
import Navbar from "../../Components/Shared/Navbar";
import RightSideNav from "../../Components/Shared/RightSideNav";

const Home = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            {/* sideNavbar and component*/}
            <div className="grid grid-cols-4 gap-5">
                <div className="col-span-1 border-2">
                <LeftSideNav></LeftSideNav>
                
                </div>

                <div className="col-span-2 border-2">
                   <Contents></Contents>
                </div>

                <div className="col-span-1 border-2">
                <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;