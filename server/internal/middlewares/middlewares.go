package middlewares

import (
	"context"
	"log"
	"net/http"

	"github.com/ZweZeya/CVWO/client/internal/database"
)

func DBHandler(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		db, err := database.ConnectDB()
		if err != nil {
			log.Fatal("failed to connect database")
		}
		ctx := context.WithValue(r.Context(), "db", db)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

// func AuthHandler(next http.Handler) http.Handler {
// 	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

// 	})
// }
