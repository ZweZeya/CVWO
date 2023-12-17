package router

import (
	"github.com/ZweZeya/CVWO/client/internal/middlewares"
	"github.com/ZweZeya/CVWO/client/internal/router/auth"
	"github.com/ZweZeya/CVWO/client/internal/router/comments"
	"github.com/ZweZeya/CVWO/client/internal/router/posts"
	"github.com/ZweZeya/CVWO/client/internal/router/tags"
	"github.com/ZweZeya/CVWO/client/internal/router/users"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/cors"
)

func Setup() chi.Router {
	r := chi.NewRouter()
	setUpRoutes(r)
	return r
}

func setUpRoutes(r chi.Router) {
	r.Use(cors.Handler(cors.Options{
		// AllowedOrigins:   []string{"https://foo.com"}, // Use this to allow specific origin hosts
		AllowedOrigins: []string{"https://*", "http://*"},
		// AllowOriginFunc:  func(r *http.Request, origin string) bool { return true },
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: true,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	}))
	r.Use(middlewares.AuthHandler)
	auth.SetupUpAuthRoutes(r)
	tags.SetUpTagsRoutes(r)
	users.SetUpUsersRoutes(r)
	posts.SetUpPostsRoutes(r)
	comments.SetUpCommentsRoutes(r)
}
