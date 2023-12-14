package tags

import (
	"github.com/ZweZeya/CVWO/client/internal/routes/tags"
	"github.com/go-chi/chi/v5"
)

func SetUpTagsRoutes(r chi.Router) {
	r.Group(tags.GetTagsRoutes())
}
