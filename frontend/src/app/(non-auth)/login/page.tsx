"use client";

import { Form } from "@/app/components/common/form/form";
import { Button } from "@/app/components/common/button/button";
import { Text } from "@/app/components/common/text/text";
import "@/style/page/login.scss";
import { useState } from "react";
import authService from "@/api/authService";
import { useRouter } from "next/navigation";
import useUserInfo from "@/app/hooks/useUserInfo";

const Page = () => {
  const { username,setUsername,password,setPassword } = useUserInfo();
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try
    {
      localStorage.setItem("username", username);
      setError(""); // エラー状態をリセット
      await authService.login(username, password);
      router.push("/user");
      // 必要なら次の画面へリダイレクトなど
    } catch (err) {
      setError("ログインに失敗しました。");
      console.log("ログインエラー:", err);
    }
  };

  return (
    <div className="login">
      <Text variant={"h1"}>Bibliotheca</Text>
      <Form label="ユーザーネーム" type={"inline"} setter={setUsername} />
      <Form label="パスワード" type={"inline"} setter={setPassword} />
      {error && <p>{error}</p>}
      <Button label={"ログイン"} type={"minimal"} onClick={handleLogin} />
    </div>
  );
};

export default Page;
