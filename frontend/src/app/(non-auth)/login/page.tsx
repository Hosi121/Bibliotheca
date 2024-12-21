"use client"

import { Form } from "@/app/components/common/form/form";
import { Button } from "@/app/components/common/button/button";
import { Text } from "@/app/components/common/text/text";
import "@/style/page/login.scss";

export const Page = () => {
  return (
    <div className="login">
      <Text variant={"h1"}>Bibliotheca</Text>
      <Form label="ID" type={"inline"} setter={() => {}} />
      <Form label="パスワード" type={"inline"} setter={() => {}} />
      <Button label={"ログイン"} type={"minimal"} />
    </div>
  );
};

export default Page;
