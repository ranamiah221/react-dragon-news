import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Header from "../../Components/Shared/Header/Header";
import RightSideNav from "../../Components/Shared/RightSideNav";
import SectionTitle from "../../Components/Shared/SectionTitle";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const NewsDetails = () => {
   const navigate=useNavigate();
    const {id}= useParams();
    const news=useLoaderData();
    const findData = news.find(aNews=> aNews._id === id);
    if(!findData){
        navigate('/');
    }
    const {details, image_url, title,}= findData;
  const handleGoHome=()=>{
    navigate('/');
  }
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-4 gap-3 my-8">
        <div className="col-span-3">
          <SectionTitle title="Dragon News"></SectionTitle>
          <div className="card bg-base-100 shadow-xl rounded-md border p-4">
            <figure>
              <img className="rounded-md"
                src={image_url}
                alt="Shoes"
              />
            </figure>
            <div className="my-5">
              <h2 className="text-xl font-bold mb-3">{title}</h2>
              <p className="text-justify mb-3">{details}</p>
              
              <div onClick={handleGoHome} className="flex items-center bg-red-600 text-white px-3 py-2 rounded-lg mt-3 w-1/4 gap-2">
              <FaArrowLeft /> <span>All new in this category</span>
              </div>
               
             
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
