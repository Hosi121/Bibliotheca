export interface Borrowing {
    id: string;
    book_id: number;
    user_id: number;
    borrowed_date: Date;
    due_date: Date; 
    returned_date?: Date;
    overdue_days?: Date;
  }
  