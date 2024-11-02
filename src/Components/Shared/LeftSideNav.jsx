import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import { NavLink } from 'react-router-dom';


const LeftSideNav = () => {
    const [categories, setCategories]=useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data=>{
            setCategories(data);
        })
    },[])
    return (
        <div className='p-4'>
            <SectionTitle title='All Category'></SectionTitle>
            {
                categories.map((category ,idx)=> <NavLink to={`/category/${category.id}`} className='block px-8 py-3 my-3 rounded-lg hover:bg-slate-300 text-[#9F9F9F] hover:text-black hover:text-base hover:font-normal'  key={idx}>{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;
