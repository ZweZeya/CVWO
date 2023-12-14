package auth

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/ZweZeya/CVWO/client/internal/dataaccess/users"
	"github.com/ZweZeya/CVWO/client/internal/models"
	"github.com/golang-jwt/jwt"
	"golang.org/x/crypto/bcrypt"
)

func hashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func checkPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

func generateAccessToken(user *models.User) string {
	bs, err := json.Marshal(user)
	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer:    string(bs),
		ExpiresAt: time.Now().Add(time.Hour * 24).Unix(), //1 day
	})

	token, err := claims.SignedString([]byte(os.Getenv("JWT_SECRET")))

	if err != nil {
		log.Fatal("fail to sign key")
	}

	return token
}

func CreateUserHandler(w http.ResponseWriter, r *http.Request) {
	var reqBody struct {
		Username  string
		Password  string
		FirstName string
		LastName  string
		Email     string
	}

	err := json.NewDecoder(r.Body).Decode(&reqBody)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if users.GetUserByUsername(reqBody.Username) != nil {
		http.Error(w, "username is already taken", http.StatusBadRequest)
		return
	}

	if users.GetUserByEmail(reqBody.Email) != nil {
		http.Error(w, "email is already taken", http.StatusBadRequest)
		return
	}

	hashedPassword, err := hashPassword(reqBody.Password)
	if err != nil {
		log.Fatal("fail to hash passoword")
	}

	newUser := models.User{
		Username:       reqBody.Username,
		HashedPassword: hashedPassword,
		FirstName:      reqBody.FirstName,
		LastName:       reqBody.LastName,
		Email:          reqBody.Email,
		// ImageUrl:       "",
	}

	users.CreateUser(&newUser)

	w.Write([]byte("new user successfully registered"))
}

func LoginUserHandler(w http.ResponseWriter, r *http.Request) {
	var reqBody struct {
		Username string
		Password string
	}

	err := json.NewDecoder(r.Body).Decode(&reqBody)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	user := users.GetUserByUsername(reqBody.Username)
	if user == nil {
		http.Error(w, "user not found", http.StatusBadRequest)
		return
	}

	if checkPasswordHash(reqBody.Password, user.HashedPassword) == false {
		http.Error(w, "incorrect password", http.StatusUnauthorized)
		return
	}

	accessTokenCookie := http.Cookie{
		Name:     "access_token",
		Value:    generateAccessToken(user),
		Path:     "/",
		Expires:  time.Now().Add(time.Hour * 24),
		HttpOnly: true,
	}
	http.SetCookie(w, &accessTokenCookie)
	w.Write([]byte("successful login"))
}

func LogoutUserHandler(w http.ResponseWriter, r *http.Request) {
	expiredCookie := http.Cookie{
		Name:     "access_token",
		Value:    "",
		Path:     "/",
		Expires:  time.Now().Add(-time.Hour),
		HttpOnly: true,
	}
	http.SetCookie(w, &expiredCookie)
	w.Write([]byte("successful login"))
}
