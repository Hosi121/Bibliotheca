import axios from "@/api/axiosInstance";
import { Book } from "@/types/books";

const bookService = {
  async addBook(book: Omit<Book, "id" | "created_at" | "updated_at" | "is_removed">): Promise<Book> {
    const response = await axios.post<Book>("/books", book);
    return response.data;
  },

  async listBooks(): Promise<Book[]> {
    const response = await axios.get<Book[]>("/books");
    return response.data;
  },

  async getBookDetails(bookId: string): Promise<Book> {
    const response = await axios.get<Book>(`/books/${bookId}`);
    return response.data;
  },

  async removeBook(bookId: string, removalReason: string): Promise<Book> {
    const response = await axios.patch<Book>(`/books/${bookId}/remove`, { removal_reason: removalReason });
    return response.data;
  },

  async restoreBook(bookId: string): Promise<Book> {
    const response = await axios.patch<Book>(`/books/${bookId}/restore`);
    return response.data;
  },
};

export default bookService;
