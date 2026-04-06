import React from 'react';

import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({ bookData }) => {

    // console.log(bookData);

    const {bookId, image, bookName, tags, author, category, rating} = bookData;

    /**
     * author: "F. Scott Fitzgerald"
    bookId: 1
    bookName: "The Great Gatsby"
    category: "Classic"
    image: "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
    publisher: "Scribner"
    rating: 4.5
    review: "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations."
    tags: (2) ['Fiction', 'Romance']
    totalPages: 192
    yearOfPublishing: 1925
     */




    return (
    
            <Link to={`/bookDetails/${bookId}`} className="card card-compact bg-base-100 shadow-xl">
                <div className="card bg-base-100 shadow-sm h-full">
                <figure className='bg-slate-200 '>
                    <img className='w-96 h-96 p-20 rotate-x-15 -rotate-y-30'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div>
                        {
                            tags.map((tag, index) => <span key={index} className="badge bg-[#23BE0A20] text-[#23BE0A] mr-2">{tag}</span>)
                        }
                    </div>
                    <h2 className="card-title text-2xl">{bookName}</h2>
                    <p>By : {author}</p>
                    <div className='border-t-1 border-dashed'></div>
                    <div className="card-actions justify-between">
                        <p className="">{category}</p>
                        <span className="flex items-center justify-center gap-2">
                            {rating} <FaRegStarHalfStroke />
                        </span>
                    </div>
                </div>
            </div>
            </Link>
    
    );
};

export default Book;