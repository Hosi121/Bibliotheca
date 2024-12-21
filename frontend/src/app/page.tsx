"use client";

import { BookColumn } from "./components/column/bookColumn";
import { UserColumn } from "./components/column/userColumn";

export default function Home() {
  return (
    <>
      <BookColumn
        id={1}
        title="Title"
        ISBN={1234567890123}
        buttonLabel="借りる"
        onClick={() => {}}
      />
      <BookColumn
        id={2}
        title="Title"
        ISBN={1234567890123}
        buttonLabel="借りる"
        onClick={() => {}}
      />
      <BookColumn
        id={3}
        title="Title"
        ISBN={1234567890123}
        buttonLabel="借りる"
        onClick={() => {}}
      />
      <BookColumn
        id={4}
        title="Title"
        ISBN={1234567890123}
        buttonLabel="借りる"
        onClick={() => {}}
      />
      <BookColumn
        id={5}
        title="Title"
        ISBN={1234567890123}
        buttonLabel="借りる"
        onClick={() => {}}
      />

      <UserColumn id="test@gmail.com" buttonLabel="消去" onClick={() => {}} />
    </>
  );
}
