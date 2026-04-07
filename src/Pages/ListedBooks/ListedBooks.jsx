import React, { useContext } from 'react';
import { BookContext } from '../../components/Context/BookProvider';

const ListedBooks = () => {

    const {isReadBook, wishList} = useContext(BookContext);
    // console.log(isReadBook, 'isReadBook');
    // console.log(wishList, 'wishList');
    return (
        <div>
            <p>Mark as read books: {isReadBook.length}</p>
            <p>Wishlist books: {wishList.length}</p>
        </div>
    );
};

export default ListedBooks;