package auth

import (
	"github.com/ZweZeya/CVWO/client/internal/routes/auth"
	"github.com/go-chi/chi/v5"
)

func SetupUpAuthRoutes(r chi.Router) {
	r.Group(auth.GetAuthRoutes())
}
