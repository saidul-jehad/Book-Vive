import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { getStoredBookRead } from "../../Utility/LocalStorage";

const PagesToRead = () => {
    const [barData, setBarData] = useState();
    const storedReadBook = getStoredBookRead()

    useEffect(() => {
        fetch('https://saidul24.github.io/books-json-data/books.json')
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    const bookReads = [];
                    for (const id of storedReadBook) {
                        const book = data.find(book => book.bookId === id)
                        if (book) {
                            bookReads.push(book)
                        }
                    }
                    setBarData(bookReads)
                }
            });
    }, [])



    return (
        <div>
            <ResponsiveContainer width="50%" aspect={3}>
                <BarChart data={barData} width={400} height={400}>
                    <XAxis dataKey="bookName"/>
                    <YAxis/>
                    <Tooltip></Tooltip>
                    <Bar dataKey="totalPages" fill="#8883d8"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PagesToRead;