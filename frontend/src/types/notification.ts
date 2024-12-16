import { UUID } from "crypto";

export interface Notification {
    id: UUID;
    user_id: number;
    message: string;
    created_at: Date;
  }
  