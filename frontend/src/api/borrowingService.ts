'use server';

import axios from "@/api/axiosInstance";
import { Borrowing } from "@/types/borrowings";

const borrowingService = {
  async borrowBook(bookId: string, userId: string): Promise<Borrowing> {
    const response = await axios.post<Borrowing>("/borrowings", { book_id: bookId, user_id: userId });
    return response.data;
  },

  async returnBook(borrowingId: string): Promise<Borrowing> {
    const response = await axios.patch<Borrowing>(`/borrowings/${borrowingId}/return`);
    return response.data;
  },

  async listOverdueBorrowings(): Promise<Borrowing[]> {
    const response = await axios.get<Borrowing[]>("/borrowings/overdue");
    return response.data;
  },

  async listUserBorrowings(userId: string): Promise<Borrowing[]> {
    const response = await axios.get<Borrowing[]>(`/users/${userId}/borrowings`);
    return response.data;
  },
};

export default borrowingService;
