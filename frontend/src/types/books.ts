import { UUID } from "crypto";

export interface Book {
    id: UUID;
    isbn: number;
    title: string;
    author: string;
    publisher: string;
    published_date: Date;
    is_removed: boolean;
    created_at: Date;
    updated_at: Date;
}