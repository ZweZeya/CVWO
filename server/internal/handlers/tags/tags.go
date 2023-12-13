package tags

import (
	"github.com/ZweZeya/CVWO/client/internal/dataaccess/tags"
	"github.com/ZweZeya/CVWO/client/internal/models"
	"gorm.io/gorm"
)

func SeedTagsHandler(db *gorm.DB) {
	tags.SeedTags(db)
}

func GetAllTagsHandler(db *gorm.DB) []models.Tag {
	return tags.GetAllTags(db)
}
