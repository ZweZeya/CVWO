package database

import (
	"log"
	"os"

	"github.com/ZweZeya/CVWO/client/internal/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	dsn := os.Getenv("DSN")
	var err error
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("failed to connect database")
	}
}

func MigrateDB() error {
	return DB.AutoMigrate(&models.User{}, &models.Tag{}, &models.VoteCount{}, &models.Post{}, &models.Comment{})
}
