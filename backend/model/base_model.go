package model

import "time"

//BaseModelで全てのモデルに共通するフィールドを定義
type BaseModel struct {
	CreatedAt time.Time
	UpdatedAt time.Time
}
