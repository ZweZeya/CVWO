package tags

import (
	"log"

	"github.com/ZweZeya/CVWO/client/internal/database"
	"github.com/ZweZeya/CVWO/client/internal/models"
	"gorm.io/gorm/clause"
)

func SeedTags() {
	tags := []models.Tag{
		{Name: "Education"},
		{Name: "Finance"},
		{Name: "Technology"},
	}
	result := database.DB.Clauses(clause.OnConflict{DoNothing: true}).Create(&tags)
	if result.Error != nil {
		log.Fatal("cannot seed tags")
	}
}

func GetAllTags() []models.Tag {
	var tags []models.Tag
	result := database.DB.Find(&tags)
	if result.Error != nil {
		log.Fatal("cannot retrieve tags")
	}
	return tags
}
