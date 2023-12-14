package users

import (
	"encoding/json"
	"net/http"

	"github.com/ZweZeya/CVWO/client/internal/models"
)

func GetCurrentUserHandler(w http.ResponseWriter, r *http.Request) {
	user := r.Context().Value("user").(*models.User)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(user)
}
