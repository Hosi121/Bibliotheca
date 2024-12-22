"use client";

import { BookColumn } from "@/app/components/column/bookColumn";
import { Button } from "@/app/components/common/button/button";

import { useRouter } from "next/navigation";
import { bookService } from "@/services/bookServices";
import { useState, useEffect } from "react";
import { Book } from "@/types/books";
import { borrowingService } from "@/api/borrowingService";
import useUserInfo from "@/app/hooks/useUserInfo";
import { Alert } from "@/app/components/popup/alert";
import "@/style/page/borrow.scss";

const Page = () => {
  const router = useRouter();
  const { username } = useUserInfo();
  const [books, setBooks] = useState<Book[] | undefined>();
  const [isOpen, setIsOpen] = useState(false);
  const [bookID, setBookID] = useState<string>("");

  const fetchBooks = async () => {
    try {
      const fetchedBooks = await bookService.listBooks();
      setBooks(fetchedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks(undefined);
    }
  };

  const handleBorrow = (bookId: string) => {
    setBookID(bookId);
    setIsOpen(true);
    console.log("username:", username);
    console.log("bookId:", bookId);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="borrow">
      <div className="borrow-header">
        <Button
          label={"↩︎"}
          type={"minimal"}
          variant="h1"
          className={"borrow-button__back"}
          onClick={() => router.push("/user")}
        />
        <h1 className="borrow-title">借りる</h1>
      </div>

      <div className="borrow-contents">
        {books === undefined ? (
          <p>書籍なし</p>
        ) : (
          books.map((book) => (
            <BookColumn
              key={book.id}
              ISBN={book.isbn}
              buttonLabel="借りる"
              id={Number(book.id)}
              onClick={() => handleBorrow(book.id)}
              title={book.title}
            />
          ))
        )}
      </div>

      {isOpen && (
        <>
          <div
            className="borrow-alert-overlay"
            onClick={() => setIsOpen(false)}
          ></div>
          <Alert
            message={"この本を借りますか？"}
            className={"borrow-alert"}
            onClickOK={async () => {
              await borrowingService.borrowBook(bookID, "admin");
            }}
            onClickCancel={() => setIsOpen(false)}
          />
        </>
      )}
    </div>
  );
};

export default Page;
