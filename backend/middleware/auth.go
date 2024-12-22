package middleware

import (
	"log"
	"net/http"
	"strings"

	"github.com/Hosi121/Bibliotheca/utils"
	"github.com/gin-gonic/gin"
)

// JWT認証ミドルウェア
func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Authorizationヘッダーからトークンを取得
		tokenString := c.GetHeader("Authorization")
		if tokenString == "" {
			log.Println("Authorizationヘッダーが存在しません")
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Missing token"})
			c.Abort()
			return
		}

		log.Printf("取得したトークン: %s\n", tokenString)

		// "Bearer " プレフィックスを削除
		tokenString = strings.TrimPrefix(tokenString, "Bearer ")
		log.Printf("Bearerプレフィックス削除後のトークン: %s\n", tokenString)

		// トークンの検証
		claims, err := utils.ValidateJWT(tokenString)
		if err != nil {
			log.Printf("トークン検証エラー: %v\n", err)
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
			c.Abort()
			return
		}

		log.Printf("トークン検証成功: クレーム情報: %v\n", claims)

		// 次の処理へ
		c.Next()
	}
}
