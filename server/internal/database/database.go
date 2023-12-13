package database

import (
	"github.com/ZweZeya/CVWO/client/internal/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func ConnectDB() (*gorm.DB, error) {
	dsn := "postgres://dvbcjwae:JLhe7qJWc-usGmXWBkXKMWOtfNDun45V@topsy.db.elephantsql.com/dvbcjwae"
	return gorm.Open(postgres.Open(dsn), &gorm.Config{})
}

func MigrateDB() error {
	db, err := ConnectDB()
	if err != nil {
		panic("failed to connect database")
	}
	return db.AutoMigrate(&models.User{}, &models.Tag{}, &models.VoteCount{}, &models.Post{}, &models.Comment{})
}
