import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../components/Context/BookProvider';

const BookDetails = () => {

    const { bookId } = useParams();

    // console.log(bookId);

    const books = useLoaderData();

    // console.log(books);


    const bookDetails = books.find(book => book.bookId === Number(bookId))

    const { image, bookName, author, category, review, totalPages, publisher, yearOfPublishing, rating } = bookDetails;

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

    const {handleBookAsRead, handleBookAsWishList} = useContext(BookContext);

    // console.log(handleBookAsRead,  'handleBookAsRead');
    // console.log(handleBookAsWishList,  'handleBookAsWishList');



    return (
        <div className="flex justify-start gap-10    my-10 ">
            <figure className='rounded-lg w-full bg-base-200 flex items-center justify-center'>
                <img className='w-auto h-150 rounded-2xl rotate-x-15 -rotate-y-30'
                    src={image}
                    alt={bookName} />
            </figure>

            <div className="w-full space-y-6 " >
                <h2 className="card-title text-4xl  ">{bookName}</h2>
                <p className='text-lg'>By : {author}</p>
                <div className="divider"></div>
                <p className='text-lg'>{category}</p>
                <div className="divider"></div>
                <p><span className='font-bold'>Review:</span> {review}</p>
                <p><span className='font-bold mr-2'>Tag:</span>  {
                    bookDetails.tags.map((tag, index) => (
                        <span key={index} className="badge bg-[#23BE0A20] text-[#23BE0A] mr-2">
                            #{tag}
                        </span>
                    ))
                }</p>
                <div className="divider"></div>
                <p>Number of pages: <span className='font-bold'>{totalPages}</span></p>
                <p>Publisher: <span className='font-bold'>{publisher}</span></p>
                <p>Year of Publishing: <span className='font-bold'>{yearOfPublishing}</span></p>
                <p>Rating: <span className='font-bold'>{rating}</span></p>
                <div className="flex gap-4 text-lg">
                    <button onClick={() => handleBookAsRead(bookDetails)} className="btn p-4.5">Read</button>
                    <button onClick={() => handleBookAsWishList(bookDetails)} className="btn btn-info text-white p-4.5">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;