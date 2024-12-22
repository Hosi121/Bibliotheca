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
  const { username, setUsername, password, setPassword } = useUserInfo();
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      localStorage.setItem("username", username);
      setError(""); // エラー状態をリセット
      await authService.login(username, password);
      router.push("/user");
    } catch (err) {
      setError("ログインに失敗しました。");
      console.log("ログインエラー:", err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <Text variant="h1">Bibliotheca</Text>
          <p>あなたの知識を広げるためのプラットフォームです。</p>
        </div>
        <div className="login-right">
          <Form label="ユーザーネーム" type="online" setter={setUsername} />
          <Form label="パスワード" type="online" setter={setPassword} />
          {error && <p className="error-message">{error}</p>}
          <div className="button-container">
            <Button label="ログイン" type="minimal" onClick={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
