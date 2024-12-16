import { UUID } from "crypto";

export interface User {
    id: UUID;
    email: string;
    hashed_password: string;
    username: string;
    birth_date: Date;
    role: "admin" | "user";
    created_at: Date;
    updated_at: Date;
  }
  