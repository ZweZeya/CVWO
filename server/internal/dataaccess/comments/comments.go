package comments

import (
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
