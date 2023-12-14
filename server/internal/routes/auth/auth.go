package auth

import (
	"github.com/ZweZeya/CVWO/client/internal/handlers/auth"
	"github.com/go-chi/chi/v5"
)

func GetAuthRoutes() func(r chi.Router) {
	return func(r chi.Router) {
		r.Route("/auth", func(r chi.Router) {
			r.Post("/register", auth.CreateUserHandler)
			r.Post("/login", auth.LoginUserHandler)
			r.Get("/logout", auth.LogoutUserHandler)
		})
	}
}
