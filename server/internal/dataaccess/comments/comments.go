package comments

import (
	"log"

	"github.com/ZweZeya/CVWO/client/internal/dataaccess/voteCounts"
	"github.com/ZweZeya/CVWO/client/internal/database"
	"github.com/ZweZeya/CVWO/client/internal/models"
)

func CreateComment(comment *models.Comment) error {
	voteCount, err := voteCounts.CreateVoteCount()
	if err != nil {
		return err
	}
	comment.VoteCountId = int(voteCount.ID)
	result := database.DB.Create(&comment)
	return result.Error
}

func GetCommentsByPostId(postId int) []models.Comment {
	var comments []models.Comment
	result := database.DB.Where("post_id = ?", postId).Find(&comments)
	if result.Error != nil {
		log.Fatal("cannot get posts")
	}
	return comments
}
