import { UUID } from "crypto";

export interface Borrowing {
    id: UUID;
    book_id: Number;
    user_id: Number;
    borrowed_date: Date;
    due_date: Date; 
    returned_date?: Date;
    overdue_days?: Date;
  }
  