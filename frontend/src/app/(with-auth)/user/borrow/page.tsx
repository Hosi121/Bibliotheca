"use client";

import { BookColumn } from "@/app/components/column/bookColumn";
import { Button } from "@/app/components/common/button/button";

import { useRouter } from "next/navigation";
import { bookService } from "@/services/bookServices";
import { useState, useEffect } from "react";
import { Book } from "@/types/books";

const Page = () => {
  const router = useRouter();
  const [books, setBooks] = useState<Book[] | undefined>();

  const fetchBooks = async () => {
    try {
      const fetchedBooks = await bookService.listBooks();
      setBooks(fetchedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks(undefined);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="borrow">
      <h1 className="borrow-title">借りる</h1>
      {books === undefined ? (
        <p>書籍なし</p>
      ) : (
        books.map((book) => (
          <BookColumn
            key={book.id}
            ISBN={book.isbn}
            buttonLabel="借りる"
            id={Number(book.id)}
            onClick={() => {}}
            title={book.title}
          />
        ))
      )}
      <Button
        label={"戻る"}
        type={"normal"}
        onClick={() => router.push("/user")}
      />
    </div>
  );
};

export default Page;
