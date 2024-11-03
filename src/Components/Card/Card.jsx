import React from "react";
import AuthorInfo from "../AuthorInfo/AuthorInfo";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { author, rating, details, image_url, title, total_view, _id } = card;
  return (
    <div className="mb-4 border-2 rounded-lg">
      <AuthorInfo author={author}></AuthorInfo>
      <div className="px-5">
        <h2 className="text-xl font-medium my-2">{title}</h2>
        <img src={image_url} alt="" />
        <p
          className="my-3 text-sm font-normal border-b-2
             pb-5 text-[#706F6F]"
        >
          {details.slice(0, 220)}
          <Link to={`/news/${_id}`} 
            className="text-amber-400
              font-semibold"
          >
            {" "}
            Read More ....
          </Link>
        </p>

        <div className="flex justify-between items-center pb-5">
          <div className="flex items-center gap-1">
          <Rating style={{ maxWidth: 150 }} value={rating.number} readOnly />
          <span className="font-bold text-[#706F6F]">{rating.number}</span>
          </div>
         
          <div className="flex items-center gap-1">
          <IoEyeSharp />
          <span className="font-medium text-[#706F6F]">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
