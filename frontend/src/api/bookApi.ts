import axios from "@/api/axiosInstance";
import { Book } from "@/types/books";

type ApiResponse<T> = {
  data: T;
  message: string;
};


const bookApi = {
  async addBook(book: Omit<Book, "id" | "created_at" | "updated_at" | "is_removed">): Promise<Book> {
    const response = await axios.post<Book>("/books", book);
    return response.data;
  },

  async listBooks(): Promise<ApiResponse<Book[]>> {
    const response = await axios.get<ApiResponse<Book[]>>("/books");
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

export default bookApi;
