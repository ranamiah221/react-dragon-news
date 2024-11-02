import { useEffect, useState } from "react";
import Card from "../Card/Card";
import SectionTitle from './../Shared/SectionTitle';


const Contents = () => {
    const [news, setNews]=useState([])
    useEffect(()=>{
        fetch('news.json')
        .then(res=>res.json())
        .then(data=>{
            setNews(data)
        })
    },[])
    return (
        <div className="p-2">
           
            <SectionTitle title='Dragon News'></SectionTitle>
            
            {
              news.map(card=> <Card key={card._id} card={card}></Card>)  
            }
        </div>
    );
};

export default Contents;