package voteCounts

import (
	"github.com/ZweZeya/CVWO/client/internal/database"
	"github.com/ZweZeya/CVWO/client/internal/models"
)

func CreateVoteCount() (*models.VoteCount, error) {
	var voteCount *models.VoteCount
	result := database.DB.Create(&voteCount)
	return voteCount, result.Error
}
