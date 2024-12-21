package model

import "time"

type books struct {
	book_id int `gorm:"primary_key"`
	isbn string `gorm:"unique;not null"`
	title string `gorm:"not null"`
	author string `gorm:"not null"`
	publisher string `gorm:"not null"`
	published_date time.Time
	status string `gorm:"type:string;not null"`