package tags

import (
	"encoding/json"
	"net/http"

	"github.com/ZweZeya/CVWO/client/internal/dataaccess/tags"
	"gorm.io/gorm"
)

func SeedTagsHandler(db *gorm.DB) {
	tags.SeedTags(db)
}

func GetAllTagsHandler(w http.ResponseWriter, r *http.Request) {
	result := tags.GetAllTags(r.Context().Value("db").(*gorm.DB))
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(result)
}
