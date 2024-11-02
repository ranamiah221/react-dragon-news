import { FaRegBookmark } from "react-icons/fa6";
import { GoShareAndroid } from "react-icons/go";

const AuthorInfo = ({author}) => {
    const{name, published_date, img}=author;
   
    
    return (
        <div className="bg-[#F3F3F3] flex items-center justify-between px-5 rounded-t-lg">
             <div className="flex items-center gap-2">
                 <img className="w-12 h-12 rounded-full" src={img} alt="" />
                 <div>
                    <h2 className="text-sm font-medium">{name}</h2>
                    <p className="text-sm font-thin">{published_date}</p>
                 </div>

             </div>
             <div className="flex items-center gap-2">
                <FaRegBookmark></FaRegBookmark>
                <GoShareAndroid />
             </div>
        </div>
    );
};

export default AuthorInfo;