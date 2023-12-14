package tags

import (
	"encoding/json"
	"net/http"

	"github.com/ZweZeya/CVWO/client/internal/dataaccess/tags"
)

func SeedTagsHandler() {
	tags.SeedTags()
}

func GetAllTagsHandler(w http.ResponseWriter, r *http.Request) {
	result := tags.GetAllTags()
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(result)
}
