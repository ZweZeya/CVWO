package posts

import (
	"github.com/ZweZeya/CVWO/client/internal/routes/posts"
	"github.com/go-chi/chi/v5"
)

func SetUpPostsRoutes(r chi.Router) {
	r.Group(posts.GetPostsRoutes())
}
