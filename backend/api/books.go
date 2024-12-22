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
			{"id": 1, "title": "ゴールデン・ホライズン", "isbn": "9781234567890"},
			{"id": 2, "title": "深淵の語り部", "isbn": "9780987654321"},
			{"id": 3, "title": "未来への航海", "isbn": "9781122334455"},
			{"id": 4, "title": "霧の中の真実", "isbn": "9786677889900"},
			{"id": 5, "title": "終わらない夏", "isbn": "9785544332211"},
			{"id": 6, "title": "星空の下で", "isbn": "9783210987654"},
			{"id": 7, "title": "夜明けの探求者", "isbn": "9784567890123"},
			{"id": 8, "title": "忘れられた王国", "isbn": "9782233445566"},
			{"id": 9, "title": "小さな幸せのレシピ", "isbn": "9787788990011"},
			{"id": 10, "title": "銀色の風", "isbn": "9783344556677"},
			{"id": 11, "title": "海の声を聞け", "isbn": "9788899001122"},
			{"id": 12, "title": "砂漠の花", "isbn": "9785566778899"},
			{"id": 13, "title": "時の旅人たち", "isbn": "9781231231234"},
			{"id": 14, "title": "無限の地平線", "isbn": "9789998887776"},
			{"id": 15, "title": "青い月の伝説", "isbn": "9786767676767"},
			{"id": 16, "title": "異世界の扉", "isbn": "9784545454545"},
			{"id": 17, "title": "未来都市クロニクル", "isbn": "9782323232323"},
			{"id": 18, "title": "不思議な図書館", "isbn": "9781212121212"},
			{"id": 19, "title": "光と闇の交差点", "isbn": "9789090909090"},
			{"id": 20, "title": "風の彼方へ", "isbn": "9787878787878"},
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
