"use client";

import { BookColumn } from "./components/column/bookColumn";
import { UserColumn } from "./components/column/userColumn";

export default function Home() {
  const books = [
    { id: 1, title: "Book 1", ISBN: 9781234567897 },
    { id: 2, title: "Book 2", ISBN: 9781234567898 },
    { id: 3, title: "Book 3", ISBN: 9781234567899 },
    { id: 4, title: "Book 4", ISBN: 9781234567800 },
    { id: 5, title: "Book 5", ISBN: 9781234567801 },
  ];

  return (
    <>
      {books.map((book) => (
        <BookColumn
          key={book.id}
          id={book.id}
          title={book.title}
          ISBN={book.ISBN}
          buttonLabel="借りる"
          onClick={() => {
            console.log(`Book ${book.id} borrowed`);
          }}
        />
      ))}

      <UserColumn
        id="test@gmail.com"
        buttonLabel="消去"
        onClick={() => {
          console.log("User deleted");
        }}
      />
    </>
  );
}
