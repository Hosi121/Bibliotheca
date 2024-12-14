package models

// 書籍モデル
type Book struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
	ISBN  string `json:"isbn"`
}

