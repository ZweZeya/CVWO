package database

import (
	"log"
	"os"

	"github.com/ZweZeya/CVWO/client/internal/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func ConnectDB() (*gorm.DB, error) {
	dsn := os.Getenv("DSN")
	return gorm.Open(postgres.Open(dsn), &gorm.Config{})
}

func MigrateDB() error {
	db, err := ConnectDB()
	if err != nil {
		log.Fatal("failed to connect database")
	}
	return db.AutoMigrate(&models.User{}, &models.Tag{}, &models.VoteCount{}, &models.Post{}, &models.Comment{})
}
