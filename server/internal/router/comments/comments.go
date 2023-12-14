package comments

import (
	"github.com/ZweZeya/CVWO/client/internal/routes/comments"
	"github.com/go-chi/chi/v5"
)

func SetUpCommentsRoutes(r chi.Router) {
	r.Group(comments.GetCommentsRoutes())
}
