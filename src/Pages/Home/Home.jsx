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
            <div>
                <RightSideNav></RightSideNav>
                <LeftSideNav></LeftSideNav>
            </div>
        </div>
    );
};

export default Home;