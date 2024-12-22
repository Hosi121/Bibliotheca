"use client";

import { BookColumn } from "@/app/components/column/bookColumn";
import { Button } from "@/app/components/common/button/button";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="return">
      <h1 className="return-title">返す</h1>
      <BookColumn
        ISBN={"1234567890123"}
        buttonLabel="返す"
        id={1}
        onClick={() => {}}
        title="Title"
      />
      <Button
        label={"戻る"}
        type={"normal"}
        onClick={() => router.push("/user")}
      />
    </div>
  );
};

export default Page;
