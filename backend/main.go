package main

import (
	"log"
	"backend/migrations"//マイグレーション用
	"backend/config"//DB接続用
	"github.com/gin-gonic/gin"
)

func main() {

		// DB接続の初期化
	db, err := config.InitializeDB()
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}

	// AutoMigrateの実行
	if err := migrations.AutoMigrate(db); err != nil {
		log.Fatalf("Migration failed: %v", err)
	}
	log.Println("Migration completed successfully")

	// Ginのデフォルトのルーターを作成
	r := gin.Default()

	// 書籍APIエンドポイント
	r.POST("/api/books", func(c *gin.Context) {
		// テスト用レスポンス
		c.JSON(200, gin.H{
			"message": "書籍が登録されました",
			"data": gin.H{
				"isbn":  "1234567890",
				"title": "本のタイトル",
			},
		})
	})

	r.GET("/api/books", func(c *gin.Context) {
		// テスト用レスポンス
		c.JSON(200, gin.H{
			"message": "書籍一覧を取得しました",
			"data": []gin.H{
				{"id": 1, "title": "本1", "isbn": "1111111111"},
				{"id": 2, "title": "本2", "isbn": "2222222222"},
			},
		})
	})

	r.GET("/api/books/:id", func(c *gin.Context) {
		id := c.Param("id")
		// テスト用レスポンス
		c.JSON(200, gin.H{
			"message": "書籍の詳細を取得しました",
			"data": gin.H{
				"id":    id,
				"title": "本" + id,
				"isbn":  "1234567890",
			},
		})
	})

	r.DELETE("/api/books/:id", func(c *gin.Context) {
		id := c.Param("id")
		// テスト用レスポンス
		c.JSON(200, gin.H{
			"message": "書籍が除籍されました",
			"data": gin.H{
				"id":     id,
				"reason": "破損",
			},
		})
	})

	// サーバーを起動
	r.Run(":8080") // デフォルトポート8080で起動
}

