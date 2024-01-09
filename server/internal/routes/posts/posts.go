package posts

import (
	"github.com/ZweZeya/CVWO/client/internal/handlers/posts"
	"github.com/go-chi/chi/v5"
)

func GetPostsRoutes() func(r chi.Router) {
	return func(r chi.Router) {
		r.Route("/posts", func(r chi.Router) {
			r.Get("/", posts.GetAllPostsHandler)
		})
		r.Route("/post", func(r chi.Router) {
			r.Get("/{id}", posts.GetPostByIdHandler)
			r.Post("/", posts.CreatePostHandler)
		})
	}
}
