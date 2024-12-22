package model

import (
	"gorm.io/gorm"
	"time"
)

type Book struct {
	BookID             uint    `gorm:"primaryKey"`
	ISBN           string  `gorm:"unique;not null"`
	Title          string  `gorm:"not null"`
	Author         string  `gorm:"not null"`
	Publisher      string  `gorm:"not null"`
	PublishedDate  time.Time
	Status         string  `gorm:"type:string;not null"` // e.g., "active", "removed"
	RemovalReason  *string `gorm:"type:string"`
	BaseModel
}

// CreateBook creates a new book in the database
func CreateBook(db *gorm.DB, book *Book) error {
	// db.Create adds a new record in the database for the given book struct
	return db.Create(book).Error
}

// GetBookByID retrieves a book by its ID
func GetBookByID(db *gorm.DB, bookID uint) (*Book, error) {
	var book Book
	// db.First fetches the first record matching the primary key
	if err := db.First(&book, bookID).Error; err != nil {
		return nil, err // Return an error if the book is not found
	}
	return &book, nil // Return the found book
}

// GetAllBooks retrieves all books from the database
func GetAllBooks(db *gorm.DB) ([]Book, error) {
	var books []Book
	// db.Find fetches all records from the books table
	if err := db.Find(&books).Error; err != nil {
		return nil, err // Return an error if the query fails
	}
	return books, nil // Return the list of books
}

// UpdateBook updates an existing book's information
func UpdateBook(db *gorm.DB, book *Book) error {
	// db.Save updates the given book record in the database
	return db.Save(book).Error
}

// DeleteBook deletes a book by its ID
func DeleteBook(db *gorm.DB, bookID uint) error {
	// db.Delete removes the record with the given primary key
	return db.Delete(&Book{}, bookID).Error
}