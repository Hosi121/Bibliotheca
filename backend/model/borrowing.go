package model

import "time"

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
