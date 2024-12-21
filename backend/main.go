package main

import (
	"github.com/gin-gonic/gin"
	"github.com/Hosi121/Bibliotheca/api"
	"github.com/Hosi121/Bibliotheca/middleware"
)

func main() {
	// Ginのルーターを作成
	r := gin.Default()

	// 認証エンドポイント
	r.POST("/api/login", api.Login)

	// 書籍エンドポイント（認証が必要）
	books := r.Group("/api/books", middleware.AuthMiddleware())
	{
		books.POST("", api.CreateBook)
		books.GET("", api.GetBooks)
		books.GET("/:id", api.GetBookByID)
		books.DELETE("/:id", api.DeleteBook)
	}

	// サーバー起動
	r.Run(":8080")
}

