import axios from "@/api/axiosInstance";

const borrowingService = {
    async borrowBook(userId: string, bookId: string) {
        const response = await axios.post("/borrowings", { userId, bookId });
        return response.data;
    },

    async returnBook(borrowingId: string) {
        const response = await axios.patch(`/borrowings/${borrowingId}/return`);
        return response.data;
    },

    async listOverdueBorrowings() {
        const response = await axios.get("/borrowings/overdue");
        return response.data;
    },

    async listUserBorrowings(userId: string) {
        const response = await axios.get(`/users/${userId}/borrowings`);
        return response.data;
    },
};

export default borrowingService;
