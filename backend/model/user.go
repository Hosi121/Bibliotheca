package model

type User struct {
	UserID             uint   `gorm:"primaryKey"`
	Email          string `gorm:"unique;not null"`
	HashedPassword string `gorm:"not null"`
	Username       string `gorm:"not null"`
	Role           string `gorm:"type:string;not null"`//e.g., "admin", "user"
	BaseModel
}
