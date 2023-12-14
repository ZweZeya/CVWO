package posts

import (
	"encoding/json"
	"net/http"

	"github.com/ZweZeya/CVWO/client/internal/dataaccess/posts"
	"github.com/ZweZeya/CVWO/client/internal/models"
)

func CreatePostHandler(w http.ResponseWriter, r *http.Request) {
	var reqBody struct {
		Title   string
		Content string
		TagId   int
	}

	err := json.NewDecoder(r.Body).Decode(&reqBody)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	user := r.Context().Value("user").(*models.User)
	post := models.Post{
		Title:   reqBody.Title,
		Content: reqBody.Content,
		UserId:  int(user.ID),
		TagId:   reqBody.TagId,
	}

	err = posts.CreatePost(&post)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("new post successfully created"))
}
