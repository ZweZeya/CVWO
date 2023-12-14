package tags

import (
	"github.com/ZweZeya/CVWO/client/internal/handlers/tags"
	"github.com/go-chi/chi/v5"
)

func GetTagsRoutes() func(r chi.Router) {
	return func(r chi.Router) {
		r.Route("/tags", func(r chi.Router) {
			r.Get("/", tags.GetAllTagsHandler)
		})
	}
}
