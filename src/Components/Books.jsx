import React, { useState } from "react";
import { books as bookData } from "../constants/mockData";
import BooksCard from "./BooksCard";
import SearchBox from "./SearchBox";
import SideCard from "./SideCard";
import styles from "./Books.module.css";

const Books = () => {
  const [books, setBooks] = useState(bookData);
  const [search, setSearch] = useState([]);
  const [liked, setLiked] = useState([]);
  const handleLikedList = (book, status) => {
    if (status) {
      //mikhaim inja agar like ro bardasht az list hazf beshe.aval ye state tarif kardim ke ye araye khali dare.bad oomadim dar ghesmate else ketab haro behesh ezafe kardim.agar like ro bardare miad ye list jadid tarif mikone be gune i ke id ooni ke mikhad hazf beshe ro migire va filtresh mikone va dar khate ba dmiad list jadid ro bermigardune//
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };
  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(bookData);
    }
  };
  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BooksCard
              key={book.id}
              data={book}
              handleLikedList={handleLikedList}
            />
          ))}
        </div>
        {!!liked.length && (
          <div className={styles.favorite}>
            <h4>Favarites</h4>
            {liked.map((book) => (
              <SideCard key={book.id} data={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
//alamete !! miad va agar masalan dar bala ma length emun 0 e bad in miad tabdilesh mikone be meghdar truthi//
export default Books;
