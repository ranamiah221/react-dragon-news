import React from 'react';
import AuthorInfo from '../AuthorInfo/AuthorInfo';

const Card = ({card}) => {
    const {author, rating, details, image_url, title, total_view}=card;
    return (
        <div>
            <AuthorInfo author={author}></AuthorInfo>
        </div>
    );
};

export default Card;