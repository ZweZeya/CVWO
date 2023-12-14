package posts

import (
	"github.com/ZweZeya/CVWO/client/internal/dataaccess/voteCounts"
	"github.com/ZweZeya/CVWO/client/internal/database"
	"github.com/ZweZeya/CVWO/client/internal/models"
)

func CreatePost(post *models.Post) error {
	voteCount, err := voteCounts.CreateVoteCount()
	if err != nil {
		return err
	}
	post.VoteCountId = int(voteCount.ID)
	result := database.DB.Create(&post)
	return result.Error
}
