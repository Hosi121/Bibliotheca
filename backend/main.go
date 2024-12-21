package main

import (
	"time"

	"github.com/Hosi121/Bibliotheca/api"
	"github.com/Hosi121/Bibliotheca/middleware"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// Ginのルーターを作成
	r := gin.Default()

	// CORS設定
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"}, // フロントエンドのオリジン
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

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
	if err := r.Run(":8080"); err != nil {
		panic("サーバーの起動に失敗しました: " + err.Error())
	}
}
