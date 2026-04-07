import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {

    const [isReadBook, setIsReadBook] = useState([]);
    const [wishList, setIsWishList] = useState([]);

    const handleBookAsRead = (currentBook) => {

        //store book id or object 
        //where to store
        //array or collection
        //if the book already exits then show the toastify
        //if not book add the book of array or collection
        const isAlreadyRead = isReadBook.find(book => book.bookId === currentBook.bookId)
        if (isAlreadyRead) {
            toast.error('The book is already read')
        } else {
            setIsReadBook([...isReadBook, currentBook])
            toast.success(`${currentBook.bookName} is marked as read`)
        }
        // console.log(currentBook, isReadBook);
    }

    const handleBookAsWishList = (currentBook) => {

        //store book id or object 
        //where to store
        //array or collection
        //if the book already exits then show the toastify
        //if not book add the book of array or collection

        const isAlreadyRead = isReadBook.find(book => book.bookId === currentBook.bookId)
        if (isAlreadyRead) {
            toast.error('The book is already read. You can not add it to wishlist')
            return;
        }


        const isAlreadyWishlisted = wishList.find(book => book.bookId === currentBook.bookId)
        if (isAlreadyWishlisted) {
            toast.info('The book is already in your wishlist')
        } else {
            setIsWishList([...wishList, currentBook])
            toast.success(`${currentBook.bookName} is added to your wishlist`)
        }
        // console.log(currentBook, wishList);
    }

    const data = {
        isReadBook,
        setIsReadBook,
        handleBookAsRead,
        wishList,
        setIsWishList,
        handleBookAsWishList,
    }

    return <BookContext.Provider value={data}>{children} </BookContext.Provider>
};

export default BookProvider;