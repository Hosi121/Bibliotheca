package model

import "time"

type Borrowing struct {
	BorrowingID  uint      `gorm:"primaryKey"`
	BookID       uint      `gorm:"not null"`
	UserID       uint      `gorm:"not null"`
	BorrowDate   time.Time `gorm:"not null"`
	DueDate      time.Time `gorm:"not null"`
	ReturnedDate *time.Time
	Book         Book      `gorm:"foreignKey:BookID;constraint:OnDelete:RESTRICT"`
	User         User      `gorm:"foreignKey:UserID;constraint:OnDelete:CASCADE"`
	BaseModel
}
