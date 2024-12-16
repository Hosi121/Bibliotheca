export interface Book {
    id: string;
    isbn: number;
    title: string;
    author: string;
    publisher: string;
    published_date: Date;
    is_removed: boolean;
    created_at: Date;
    updated_at: Date;
}