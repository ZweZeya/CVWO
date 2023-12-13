package users

import (
	"github.com/ZweZeya/CVWO/client/internal/handlers/users"
	"github.com/go-chi/chi/v5"
)

func GetUsersRoutes() func(r chi.Router) {
	return func(r chi.Router) {
		r.Route("/users", func(r chi.Router) {

		})
		r.Route("/user", func(r chi.Router) {
			r.Post("/register", users.CreateNewUserHandler)
		})
	}
}
