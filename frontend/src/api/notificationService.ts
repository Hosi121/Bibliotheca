import axios from "@/api/axiosInstance";
import { Notification } from "@/types/notification";

const reminderService = {
  async listUserReminders(userId: string): Promise<Notification[]> {
    const response = await axios.get<Notification[]>(`/users/${userId}/notifications`);
    return response.data;
  },

  async createReminder(userId: string, message: string): Promise<Notification> {
    const response = await axios.post<Notification>("/reminders", { user_id: userId, message });
    return response.data;
  },
};

export default reminderService;
