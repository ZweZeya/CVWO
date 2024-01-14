package comments

import (
	"log"
	"time"

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

type CommentResponse struct {
	ID            int
	Content       string
	UserId        int
	Username      string
	PostId        int
	VoteCountId   int
	ParentId      int
	CreatedAt     time.Time
	CommentsCount int
	UserVoteValue int
}

func GetCommentsByPostId(user *models.User, postId int) []CommentResponse {
	var comments []CommentResponse
	result := database.DB.Raw(`
	SELECT 
		comments.id, 
		comments.content, 
		comments.post_id,
		comments.user_id,
		comments.created_at,
		users.username, 
		vote_counts.up_votes as up_votes_count, 
		vote_counts.down_votes as down_votes_count,
		COUNT(c.id) as comment_count,
		(SELECT votes.user_id FROM "votes" where votes.post_id = comments.id AND votes.user_id = ?) AS user_vote_value
	FROM comments

	JOIN users ON comments.user_id = users.id 
	JOIN vote_counts ON comments.vote_count_id = vote_counts.id 
	LEFT JOIN comments as c ON c.parent_id = comments.id 

	WHERE comments.post_id = ?

	GROUP BY 
		comments.id, 
		comments.content,  
		comments.user_id, 
		users.username, 
		vote_counts.up_votes, 
		vote_counts.down_votes, 
		user_vote_value
	`, user.ID, postId).Scan(&comments)
	if result.Error != nil {
		log.Fatal("cannot get posts")
	}
	return comments
}
