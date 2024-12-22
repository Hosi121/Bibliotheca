package model

import (
	"gorm.io/gorm"
	"time"
)

type Borrowing struct {
	BorrowingID  uint      `gorm:"primaryKey"`
	BookID       uint      `gorm:"not null;uniqueIndex:idx_user_book_date"`
	UserID       uint      `gorm:"not null;uniqueIndex:idx_user_book_date"`
	BorrowDate   time.Time `gorm:"not null;uniqueIndex:idx_user_book_date"`
	DueDate      time.Time `gorm:"not null"`
	ReturnedDate *time.Time
	Book         Book      `gorm:"foreignKey:BookID;constraint:OnDelete:RESTRICT"`
	User         User      `gorm:"foreignKey:UserID;constraint:OnDelete:CASCADE"`
	BaseModel
}

// CreateBorrowing creates a new borrowing record in the database
func CreateBorrowing(db *gorm.DB, borrowing *Borrowing) error {
	// db.Create adds a new record in the database for the given borrowing struct
	return db.Create(borrowing).Error
}

// GetBorrowingByID retrieves a borrowing record by its ID
func GetBorrowingByID(db *gorm.DB, borrowingID uint) (*Borrowing, error) {
	var borrowing Borrowing
	// db.First fetches the first record matching the primary key
	if err := db.First(&borrowing, borrowingID).Error; err != nil {
		return nil, err // Return an error if the borrowing record is not found
	}
	return &borrowing, nil // Return the found borrowing record
}

// GetAllBorrowings retrieves all borrowing records from the database
func GetAllBorrowings(db *gorm.DB) ([]Borrowing, error) {
	var borrowings []Borrowing
	// db.Find fetches all records from the borrowings table
	if err := db.Find(&borrowings).Error; err != nil {
		return nil, err // Return an error if the query fails
	}
	return borrowings, nil // Return the list of borrowings
}

// UpdateBorrowing updates an existing borrowing record's information
func UpdateBorrowing(db *gorm.DB, borrowing *Borrowing) error {
	// db.Save updates the given borrowing record in the database
	return db.Save(borrowing).Error
}

// DeleteBorrowing deletes a borrowing record by its ID
func DeleteBorrowing(db *gorm.DB, borrowingID uint) error {
	// db.Delete removes the record with the given primary key
	return db.Delete(&Borrowing{}, borrowingID).Error
}
