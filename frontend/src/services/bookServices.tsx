import bookApi from "@/api/bookApi";
import { Book } from "@/types/books";


export const bookService = {
  async listBooks(): Promise<Book[]> {
    const response = await bookApi.listBooks();
    return response.data;
  },
};
