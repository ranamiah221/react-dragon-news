import Contents from "../../Components/Contents/Contents";
import Marque from "../../Components/Marque/Marque";
import Header from "../../Components/Shared/Header/Header";
import LeftSideNav from "../../Components/Shared/LeftSideNav";
import Navbar from "../../Components/Shared/Navbar";
import RightSideNav from "../../Components/Shared/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
           <Marque></Marque> 
            <div>
                <Navbar></Navbar>
            </div>
            {/* sideNavbar and component*/}
            <div className="grid grid-cols-4 gap-3">
                <div className="col-span-1 ">
                <LeftSideNav></LeftSideNav>
                
                </div>

                <div className="col-span-2">
                   <Contents></Contents>
                </div>

                <div className="col-span-1 ">
                <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;