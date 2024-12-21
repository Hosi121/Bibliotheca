"use client"

import { BookColumn } from "./components/table/bookColumn";

export default function Home() {
  return (
    <>
      <BookColumn
        id={1}
        title="Title"
        ISBN={1234567890123}
        buttonLabel="削除"
        onClick={() => {}}
      />
      <BookColumn
        id={2}
        title="Title"
        ISBN={1234567890123}
        buttonLabel="削除"
        onClick={() => {}}
      />
      <BookColumn
        id={3}
        title="Title"
        ISBN={1234567890123}
        buttonLabel="削除"
        onClick={() => {}}
      />
      <BookColumn
        id={4}
        title="Title"
        ISBN={1234567890123}
        buttonLabel="削除"
        onClick={() => {}}
      />
      <BookColumn
        id={5}
        title="Title"
        ISBN={1234567890123}
        buttonLabel="削除"
        onClick={() => {}}
      />

    </>
  );
}
