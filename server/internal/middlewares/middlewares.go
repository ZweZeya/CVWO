package middlewares

import (
	"context"
	"encoding/json"
	"net/http"
	"os"
	"strings"

	"github.com/ZweZeya/CVWO/client/internal/models"
	"github.com/golang-jwt/jwt"
)

func AuthHandler(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if strings.HasPrefix(r.URL.Path, "/auth") {
			next.ServeHTTP(w, r)
			return
		}

		accessTokenCookie, err := r.Cookie("access_token")
		if err == http.ErrNoCookie {
			http.Error(w, "unauthorised user", http.StatusUnauthorized)
			return
		}

		accessToken := accessTokenCookie.Value

		token, err := jwt.ParseWithClaims(accessToken, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
			return []byte(os.Getenv("JWT_SECRET")), nil
		})

		if err == http.ErrNoCookie {
			http.Error(w, "unauthorised user", http.StatusUnauthorized)
			return
		}

		claims := token.Claims.(*jwt.StandardClaims)
		var user models.User
		json.Unmarshal([]byte(claims.Issuer), &user)
		ctx := context.WithValue(r.Context(), "user", &user)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}
