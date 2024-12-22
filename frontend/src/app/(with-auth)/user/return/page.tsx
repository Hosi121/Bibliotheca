"use client";

import { BookColumn } from "@/app/components/column/bookColumn";
import { Button } from "@/app/components/common/button/button";
import { useRouter } from "next/navigation";
import { bookService } from "@/services/bookServices";
import { borrowingService } from "@/api/borrowingService";
import { useState, useEffect } from "react";
import { Book } from "@/types/books";
import { Alert } from "@/app/components/popup/alert";
import "@/style/page/return.scss";

const Page = () => {
  const router = useRouter();
  const [books, setBooks] = useState<Book[] | undefined>();
  const [isOpen, setIsOpen] = useState(false);
  const [bookID, setBookID] = useState<string>("");

  const fetchBooks = async () => {
    try {
      const fetchedBooks = await bookService.listBooks(); // 返却対象の書籍リスト取得
      setBooks(fetchedBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks(undefined);
    }
  };

  const handleReturn = (bookId: string) => {
    setBookID(bookId);
    setIsOpen(true);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="return">
      <div className="return-header">
        <Button
          label={"↩︎"}
          type={"minimal"}
          variant="h1"
          className={"return-button__back"}
          onClick={() => router.push("/user")}
        />
        <h1 className="return-title">返す</h1>
      </div>

      <div className="return-contents">
        {books === undefined ? (
          <p>返却する書籍はありません</p>
        ) : (
          books.map((book) => (
            <BookColumn
              key={book.id}
              ISBN={book.isbn}
              buttonLabel="返す"
              id={Number(book.id)}
              onClick={() => handleReturn(book.id)}
              title={book.title}
            />
          ))
        )}
      </div>

      {isOpen && (
        <>
          <div
            className="return-alert-overlay"
            onClick={() => setIsOpen(false)}
          ></div>
          <Alert
            message={"この本を返しますか？"}
            className={"return-alert"}
            onClickOK={async () => {
              await borrowingService.returnBook(bookID);
              setIsOpen(false);
              fetchBooks(); // 返却後にリストを更新
            }}
            onClickCancel={() => setIsOpen(false)}
          />
        </>
      )}
    </div>
  );
};

export default Page;
