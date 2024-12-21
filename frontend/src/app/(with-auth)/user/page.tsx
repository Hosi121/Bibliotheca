'use client'

import { Button } from "@/app/components/common/button/button";
import "@/style/page/user.scss";
import { useRouter } from "next/navigation";

const Page = () =>
{
  const router = useRouter();
  return (
    <div className="user">
      <h1 className="user-title">wellcome</h1>
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
      </div>
    </div>
  );
}

export default Page;