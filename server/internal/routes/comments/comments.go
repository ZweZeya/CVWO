package comments

import (
	"github.com/ZweZeya/CVWO/client/internal/handlers/comments"
	"github.com/go-chi/chi/v5"
)

func GetCommentsRoutes() func(r chi.Router) {
	return func(r chi.Router) {
		r.Route("/comments", func(r chi.Router) {

		})
		r.Route("/comment", func(r chi.Router) {
			r.Post("/", comments.CreateCommentHandler)
		})
	}
}
