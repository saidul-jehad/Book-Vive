
import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([])
    // console.log(books);

    useEffect(() => {
        fetch('https://saidul24.github.io/books-json-data/books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])


    return (

        <div className="w-[98%] mt-24 mx-auto">
            <h1 className="text-4xl font-bold text-center mb-10 font-playfair ">books </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 ">
                {
                    books.map(book => <Book key={book.bookId} book={book}> </Book>)
                }
            </div>
        </div>
    );
};

export default Books;