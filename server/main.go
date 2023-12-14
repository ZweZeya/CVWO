package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/ZweZeya/CVWO/client/internal/database"
	"github.com/ZweZeya/CVWO/client/internal/router"
	"github.com/joho/godotenv"
)

func main() {
	r := router.Setup()
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	database.ConnectDB()
	// database.MigrateDB()

	fmt.Print("Listening on port 8000 at http://localhost:8000\n")
	log.Fatalln(http.ListenAndServe(":8000", r))
}
