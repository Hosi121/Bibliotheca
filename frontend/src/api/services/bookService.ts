import axios from "@/api/axiosInstance";

const bookService = {
    async addBook(isbn: string) {
        const response = await axios.post("/books", { isbn });
        return response.data;
    },

    async listBooks() {
        const response = await axios.get("/books");
        return response.data;
    },

    async getBookDetails(bookId: string) {
        const response = await axios.get(`/books/${bookId}`);
        return response.data;
    },

    async removeBook(bookId: string, reason: string) {
        const response = await axios.patch(`/books/${bookId}/remove`, { reason });
        return response.data;
    },

    async restoreBook(bookId: string) {
        const response = await axios.patch(`/books/${bookId}/restore`);
        return response.data;
    },
};

export default bookService;
