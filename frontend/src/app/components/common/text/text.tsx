import React from "react";
import "@/style/text.scss";

type TextProps = {
  variant?: "h1" | "h2" | "h3" | "body1" | "body2" | "body3";
  bold?: boolean; // 太文字にするオプション
  className?: string; // 外部からクラス名を追加するオプション
  children: React.ReactNode;
};

export const Text = ({
  variant = "body1",
  bold = false,
  className = "",
  children,
}: TextProps) => {
  const computedClassName = `${variant} ${
    bold ? "bold" : ""
  } ${className}`.trim();
  return <div className={computedClassName}>{children}</div>;
};
