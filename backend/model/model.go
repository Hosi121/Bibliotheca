package model

import "time"

type users struct {
	user_id int `gorm:"primary_key"`
	email string `"gorm:unique;not null"`
	hashed_password string `gorm:"not null"`
	username string `gorm:"not null"`//unique????
	role string `gorm:"type:string"`
	created_at time.Time
	updated_at time.Time
}

type books struct {
	book_id int `gorm:"primary_key"`
	isbn string `gorm:"unique;not null"`
	title string `gorm:"not null"`
	author string `gorm:"not null"`
	publisher string `gorm:"not null"`
	published_date time.Time
	status string `gorm:"type:string;not null"`