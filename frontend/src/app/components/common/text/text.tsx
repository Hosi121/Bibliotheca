import React from "react";
import '@/style/text.scss';

type TextProps = {
  variant: "h1" | "h2" | "h3" | "body1" | "body2" | "body3";
  bold?: boolean; // 太文字にするオプション
  children: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({ variant, bold = false, children }) => {
  const className = `${variant} ${bold ? "bold" : ""}`;
  return <div className={className}>{children}</div>;
};

