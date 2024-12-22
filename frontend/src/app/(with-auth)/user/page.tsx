"use client";

import { Button } from "@/app/components/common/button/button";
import { Text } from "@/app/components/common/text/text";
import "@/style/page/user.scss";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");

  // クライアントサイドでlocalStorageの値を取得
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    router.push("/login");
  };

  return (
    <div className="user">
      <Text className="user-title h1">Bibliotheca</Text>
      <Text className="user-welcome h2">
        ようこそ {username || "ゲスト"}さん
      </Text>

      <div className="user-buttons">
        <Button
          label={"借りる"}
          type={"main"}
          onClick={() => router.push("/user/borrow")}
        />
        <Button
          label={"返す"}
          type={"main"}
          onClick={() => router.push("/user/return")}
        />
        <div className="user-logout">
          <Button label={"ログアウト"} type={"normal"} onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default Page;
