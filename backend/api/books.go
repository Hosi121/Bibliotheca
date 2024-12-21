package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// 書籍の登録
func CreateBook(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "書籍が登録されました",
		"data": gin.H{
			"isbn":  "1234567890",
			"title": "本のタイトル",
		},
	})
}

// 書籍一覧の取得
func GetBooks(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "書籍一覧を取得しました",
		"data": []gin.H{
			{"id": 1, "title": "本1", "isbn": "1111111111"},
			{"id": 2, "title": "本2", "isbn": "2222222222"},
		},
	})
}

// 書籍詳細の取得
func GetBookByID(c *gin.Context) {
	id := c.Param("id")
	c.JSON(http.StatusOK, gin.H{
		"message": "書籍の詳細を取得しました",
		"data": gin.H{
			"id":    id,
			"title": "本" + id,
			"isbn":  "1234567890",
		},
	})
}

// 書籍の削除
func DeleteBook(c *gin.Context) {
	id := c.Param("id")
	c.JSON(http.StatusOK, gin.H{
		"message": "書籍が除籍されました",
		"data": gin.H{
			"id":     id,
			"reason": "破損",
		},
	})
}

