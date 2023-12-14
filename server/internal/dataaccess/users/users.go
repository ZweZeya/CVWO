package users

import (
	"errors"
	"log"

	"github.com/ZweZeya/CVWO/client/internal/database"
	"github.com/ZweZeya/CVWO/client/internal/models"
	"gorm.io/gorm"
)

func GetUserByUsername(username string) *models.User {
	var user *models.User
	result := database.DB.Where("username = ?", username).First(&user)
	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			return nil
		}
		log.Fatal("cannot retrieve user by username")
	}
	return user
}

func GetUserByEmail(email string) *models.User {
	var user *models.User
	result := database.DB.Where("email = ?", email).First(&user)
	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			return nil
		}
		log.Fatal("cannot retrieve user by email")
	}
	return user
}

func CreateNewUser(user models.User) {
	result := database.DB.Create(&user)
	if result.Error != nil {
		log.Fatal("cannot create user")
	}
}
