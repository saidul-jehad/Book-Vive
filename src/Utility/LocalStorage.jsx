import { toast } from "react-toastify";

const getStoredBookRead = () => {
    const storedReadBook = localStorage.getItem('Read-book');

    if (storedReadBook) {
        return JSON.parse(storedReadBook);
    }
    return [];
}


const saveBookRead = id => {
    const storedReadBook = getStoredBookRead()
    const exists = storedReadBook.find(jobId => jobId === id);
    if (!exists) {
        toast("Books Added to ReadList");
        storedReadBook.push(id);
        localStorage.setItem('Read-book', JSON.stringify(storedReadBook))
    }
    else {
        toast("You have Already Read this Books ")
    }
}



// Wish list 
const getWishlistBook = () => {

    const storedWishlistBook = localStorage.getItem('Wishlist-book');


    if (storedWishlistBook) {
        return JSON.parse(storedWishlistBook)
    }

    return []
}

const saveWishlistBook = id => {

    const storedReadBook = getStoredBookRead()
    const exists = storedReadBook.find(jobId => jobId === id);

    const storedWishlistBook = getWishlistBook()
    const exists2 = storedWishlistBook.find(jobId => jobId === id);
    if ((!exists2) && (!exists)) {
        toast("Books Added to WishList");
        storedWishlistBook.push(id);
        localStorage.setItem('Wishlist-book', JSON.stringify(storedWishlistBook))
    }
    else {
        if (!exists2) {
            toast("You have Already Read this Books ")
        }
        else {
            toast("You have Already Added to WishList");
        }
    }
}

export { saveBookRead, getStoredBookRead, getWishlistBook, saveWishlistBook }