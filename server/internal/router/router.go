package router

import (
	"github.com/ZweZeya/CVWO/client/internal/middlewares"
	"github.com/ZweZeya/CVWO/client/internal/router/tags"
	"github.com/ZweZeya/CVWO/client/internal/router/users"
	"github.com/go-chi/chi/v5"
)

func Setup() chi.Router {
	r := chi.NewRouter()
	setUpRoutes(r)
	return r
}

func setUpRoutes(r chi.Router) {
	r.Use(middlewares.DBHandler)
	tags.SetUpTagsRoutes(r)
	users.SetUpUsersRoutes(r)
}
