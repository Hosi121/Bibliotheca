package model

import (
	"gorm.io/gorm"
)

type User struct {
	UserID             uint   `gorm:"primaryKey"`
	Email          string `gorm:"unique;not null"`
	HashedPassword string `gorm:"not null"`
	Username       string `gorm:"not null"`
	Role           string `gorm:"type:string;not null"`//e.g., "admin", "user"
	BaseModel
}

// CreateUser creates a new user in the database
func CreateUser(db *gorm.DB, user *User) error {
	return db.Create(user).Error
}

// GetUserByID retrieves a user by their ID
func GetUserByID(db *gorm.DB, userID uint) (*User, error) {
	var user User
	if err := db.First(&user, userID).Error; err != nil {
		return nil, err
	}
	return &user, nil
}

// GetAllUsers retrieves all users from the database
func GetAllUsers(db *gorm.DB) ([]User, error) {
	var users []User
	if err := db.Find(&users).Error; err != nil {
		return nil, err
	}
	return users, nil
}

// UpdateUser updates an existing user's information
func UpdateUser(db *gorm.DB, user *User) error {
	return db.Save(user).Error
}

// DeleteUser deletes a user by their ID
func DeleteUser(db *gorm.DB, userID uint) error {
	return db.Delete(&User{}, userID).Error
}