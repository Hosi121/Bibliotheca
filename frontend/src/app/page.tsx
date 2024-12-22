import { redirect } from "next/navigation";

export default function Home() {
  // サーバーサイドでリダイレクト
  redirect("/login"); 

  // 実際にはこのコードは実行されない
  return null;
}
