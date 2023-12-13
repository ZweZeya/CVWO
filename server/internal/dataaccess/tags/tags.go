package tags

import (
	"log"

	"github.com/ZweZeya/CVWO/client/internal/models"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

func SeedTags(db *gorm.DB) {
	tags := []models.Tag{
		{Name: "Education"},
		{Name: "Finance"},
		{Name: "Technology"},
	}
	db.Clauses(clause.OnConflict{DoNothing: true}).Create(tags)
}

func GetAllTags(db *gorm.DB) []models.Tag {
	var tags []models.Tag
	result := db.Find(&tags)
	if result.Error != nil {
		log.Fatalf("cannot retrieve tags")
	}
	return tags
}
