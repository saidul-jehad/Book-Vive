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
    const newBooks = useLoaderData()

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

        if (newBooks.length > 0) {
            const wishlists = [];
            for (const id of storedWishlistBook) {
                const newBook = newBooks.find(book => book.bookId === id)
                if (newBook) {
                    listWish.push(newBook)
                }
            }
            console.log(wishlists)
            // setListWish(wishlists)

        }

    }, [listWish])

    return (
        <div>
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
                            listWish.map(book =>  <WishlistBooks key={book.bookId} book={book}></WishlistBooks>)
                        }
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default ListedBooks;