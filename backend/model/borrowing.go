package model

import "time"

type borrowings struct {
	borrowing_id int `gorm:"primary_key"`
	book_id int `gorm:"not null"`
	user_id int `gorm:"not null"`
	borrow_date time.Time `gorm:"not null"`
	due_date time.Time `gorm:"not null"`
	returned_date *time.Time
	created_at time.Time
	updated_at time.Time
	books books `gorm:"foreignKey:book_id;constraint:OnDelete:RESTRICT"`
	users users `gorm:"foreignKey:user_id;constraint:OnDelete:CASCADE"`
}