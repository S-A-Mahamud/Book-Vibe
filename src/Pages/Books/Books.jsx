import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ booksData }) => {

    // console.log(booksData);

    // useEffect(() => {
    //     fetch('/BooksData.json')
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    // }, [])


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 h-full'>
            <Suspense fallback={<span>Loading...</span>}>
                {
                    booksData.map(bookData => <Book key={bookData.bookId} bookData={bookData} />)
                }
            </Suspense>
        </div>
    );
};

export default Books;