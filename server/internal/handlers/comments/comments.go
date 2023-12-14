package comments

import (
	"encoding/json"
	"net/http"

	"github.com/ZweZeya/CVWO/client/internal/dataaccess/comments"
	"github.com/ZweZeya/CVWO/client/internal/models"
)

func CreateCommentHandler(w http.ResponseWriter, r *http.Request) {
	var reqBody struct {
		Content  string
		PostId   int
		ParentId int
	}

	err := json.NewDecoder(r.Body).Decode(&reqBody)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	user := r.Context().Value("user").(*models.User)

	comment := models.Comment{
		Content:  reqBody.Content,
		PostId:   reqBody.PostId,
		ParentId: reqBody.ParentId,
		UserId:   int(user.ID),
	}

	err = comments.CreateComment(&comment)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("new comment successfully created"))
}
