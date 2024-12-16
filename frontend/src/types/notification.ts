import { UUID } from "crypto";

export interface Notification {
    id: UUID;
    user_id: Number;
    message: string;
    created_at: Date;
  }
  