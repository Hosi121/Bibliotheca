package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	// Ginのデフォルトのルーターを作成
	r := gin.Default()

	// GETリクエストのルートを定義
	r.GET("/hello", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello, World!",
		})
	})

	// サーバーを起動
	r.Run(":8080") // デフォルトポート8080で起動
}
