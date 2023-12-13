package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/ZweZeya/CVWO/client/internal/router"
	"github.com/joho/godotenv"
)

func main() {
	r := router.Setup()
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	fmt.Print("Listening on port 8000 at http://localhost:8000!")
	log.Fatalln(http.ListenAndServe(":8000", r))
}
