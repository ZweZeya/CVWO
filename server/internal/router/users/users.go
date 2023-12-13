package users

import (
	"github.com/ZweZeya/CVWO/client/internal/routes/tags"
	"github.com/go-chi/chi/v5"
)

func SetUpUsersRoutes(r chi.Router) {
	r.Group(tags.GetTagRoutes())
}
