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