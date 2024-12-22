package migrations

import (
    "gorm.io/gorm"
    "backend/models"
)

func AutoMigrate(db *gorm.DB) error {
    return db.AutoMigrate(
        &models.User{},
        &models.Book{},
        &models.Borrowing{},
		&models.BaseModel{},
    )
}
