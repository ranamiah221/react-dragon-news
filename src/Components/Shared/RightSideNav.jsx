import React from 'react';
import SectionTitle from './SectionTitle';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import swimming from '../../assets/swimming.png';
import classroom from '../../assets/class.png';
import playground from '../../assets/playground.png';

const RightSideNav = () => {
    return (
        <div className='p-2'>
            <SectionTitle title='Login With'></SectionTitle>
            <div className='flex items-center justify-center gap-2 hover:text-blue-500
             hover:border-blue-500 border px-auto rounded mb-2'>
                <FaGoogle></FaGoogle>
                <p>Login with Google</p>
            </div>
            <div className='flex items-center justify-center gap-2 hover:text-blue-500
             hover:border-blue-500 border px-auto rounded mb-10'>
                <FaGithub></FaGithub>
                <p>Login with Github</p>
            </div>

            <SectionTitle title='Find Us On'></SectionTitle>
            <div className='flex items-center gap-1 border rounded-t-lg px-3 hover:text-blue-500
             hover:border-blue-500'>
                <FaFacebook></FaFacebook>
                <a href="" className='text-sm font-normal'>Facebook</a>
            </div>
            <div className='flex items-center gap-1 border-x px-3 hover:text-blue-500
             hover:border-blue-500'>
                <FaTwitter></FaTwitter>
                <a href="" className='text-sm font-normal'>Twitter</a>
            </div>
            <div className='flex items-center gap-1 border rounded-b-lg px-3 hover:text-blue-500
             hover:border-blue-500 mb-10'>
                <FaInstagram></FaInstagram>
                <a href="" className='text-sm font-normal'>Instagram</a>
            </div>
            <SectionTitle title='Q-Zone'></SectionTitle>
            <img src={swimming} alt="" />
            <img src={classroom} alt="" />
            <img src={playground} alt="" />
        </div>
    );
};

export default RightSideNav;