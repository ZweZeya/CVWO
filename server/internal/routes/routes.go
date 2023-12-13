package routes

import (
	"encoding/json"
	"net/http"

	"github.com/ZweZeya/CVWO/client/internal/handlers/tags"
	"github.com/ZweZeya/CVWO/client/internal/handlers/users"
	"github.com/ZweZeya/CVWO/client/internal/middlewares"
	"github.com/go-chi/chi/v5"
	"gorm.io/gorm"
)

func GetRoutes() func(r chi.Router) {
	return func(r chi.Router) {
		r.Use(middlewares.DBHandler)
		r.Get("/users", func(w http.ResponseWriter, req *http.Request) {
			response, _ := users.Test(w, req)
			// response := "hi"

			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(response)
		})
		r.Get("/tags", func(w http.ResponseWriter, r *http.Request) {
			result := tags.GetAllTagsHandler(r.Context().Value("db").(*gorm.DB))
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(result)
		})
	}
}
