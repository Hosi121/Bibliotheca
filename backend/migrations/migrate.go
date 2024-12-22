package migrations

import (
    "gorm.io/gorm"
    "project/models"
)

func AutoMigrate(db *gorm.DB) error {
    return db.AutoMigrate(
        &models.User{},
        &models.Book{},
        &models.Borrowing{},
		&models.BaseModel{},
    )
}
