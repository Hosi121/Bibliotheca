"use client"

import { Form } from "@/app/components/common/form/form";
import { Button } from "@/app/components/common/button/button";
import "@/style/login.scss";

export const Page = () => {
  return (
    <div className="login">
      <Form label="ID" type={"inline"} setter={() => {}} />
      <Form label="パスワード" type={"inline"} setter={() => {}} />
      <Button label={"ログイン"} type={"minimal"} />
    </div>
  );
};

export default Page;
