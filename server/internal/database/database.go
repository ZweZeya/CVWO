package database

import (
	"fmt"
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
	log.Println("connecting to database")
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("failed to connect database")
	}
	fmt.Print("database connection established")
}

func MigrateDB() {
	err := DB.AutoMigrate(&models.User{}, &models.Tag{}, &models.VoteCount{}, &models.Post{}, &models.Comment{}, &models.Votes{})
	if err != nil {
		log.Fatal("failed to migrate database")
	}
	fmt.Print("database succcessfully migrated")
}
