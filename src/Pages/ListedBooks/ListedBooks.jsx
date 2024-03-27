import { useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from '../../component/ReadBooks/ReadBooks';
import WishlistBooks from '../../component/WishlistBooks/WishlistBooks';
import { useEffect, useState } from 'react';
import { getStoredBookRead, getWishlistBook } from '../../Utility/LocalStorage';

const ListedBooks = () => {

    const [readBooks, setReadBooks] = useState([])
    const [listWish, setListWish] = useState([])

    const books = useLoaderData()

    useEffect(() => {
        const storedReadBook = getStoredBookRead();

        if (books.length > 0) {
            const bookReads = [];
            for (const id of storedReadBook) {
                const book = books.find(book => book.bookId === id)
                if (book) {
                    bookReads.push(book)
                }
            }
            setReadBooks(bookReads)

        }
    }, [books])

    useEffect(() => {
        const storedWishlistBook = getWishlistBook();

        if (books.length > 0) {
            const wishlists = [];
            for (const id of storedWishlistBook) {
                const book = books.find(book => book.bookId === id)
                if (book) {
                    listWish.push(book)
                }
            }
            console.log(wishlists)
            // setListWish(wishlists)

        }

    }, [])

    return (
        <div className='p-4'>
            <div>
                <h3 className='text-3xl font-bold text-center bg-base-200 py-5 rounded-xl'>Books</h3>

                <div className='mt-8 mb-4 text-center'>

                    <details className="dropdown">
                        <summary className="m-1 btn">Short By</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a>Rating</a></li>
                            <li><a>Number of Page</a></li>
                            <li><a>Published Year</a></li>
                        </ul>
                    </details>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>title 1</Tab>
                    <Tab>title 2</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex flex-col gap-5'>
                        {
                            readBooks.map(book => <ReadBooks key={book.bookId} book={book}> </ReadBooks>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex flex-col gap-5'>
                        {
                            listWish.map(book => <WishlistBooks key={book.bookId} book={book}></WishlistBooks>)
                        }
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default ListedBooks;