import { useEffect, useState } from "react";


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
        <div>
            {
                
            }
        </div>
    );
};

export default Contents;