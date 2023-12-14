package posts

import (
	"github.com/ZweZeya/CVWO/client/internal/handlers/posts"
	"github.com/go-chi/chi/v5"
)

func GetPostsRoutes() func(r chi.Router) {
	return func(r chi.Router) {
		r.Route("/posts", func(r chi.Router) {

		})
		r.Route("/post", func(r chi.Router) {
			r.Post("/", posts.CreatePostHandler)
		})
	}
}
