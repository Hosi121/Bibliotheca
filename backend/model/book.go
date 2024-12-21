package model

import "time"

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
