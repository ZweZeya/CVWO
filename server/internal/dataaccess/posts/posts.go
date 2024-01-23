package posts

import (
	"log"
	"time"

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

type PostResponse struct {
	ID             int
	Title          string
	Content        string
	CreatedAt      time.Time
	TagName        string
	TagId          string
	UserId         int
	Username       string
	UpVotesCount   int
	DownVotesCount int
	CommentsCount  int
	UserVoteValue  int
}

func GetAllPosts(user *models.User) []PostResponse {
	var posts []PostResponse
	result := database.DB.Raw(`
		SELECT 
			posts.id, 
			posts.content, 
			posts.title, 
			posts.user_id,
			posts.created_at,
			tags.name as tag_name, 
			tags.id as tag_id, 
			users.username, 
			vote_counts.up_votes as up_votes_count, 
			vote_counts.down_votes as down_votes_count,
			COUNT(comments.id) as comments_count,
			(SELECT votes.user_id FROM "votes" where votes.post_id = posts.id AND votes.user_id = ?) AS user_vote_value
		FROM posts

		JOIN tags ON posts.tag_id = tags.id 
		JOIN users ON posts.user_id = users.id 
		JOIN vote_counts ON posts.vote_count_id = vote_counts.id 
		LEFT JOIN comments ON comments.post_id = posts.id 

		GROUP BY 
			posts.id, 
			posts.content, 
			posts.title, 
			posts.user_id, 
			tags.name,
			tags.id,
			users.username, 
			vote_counts.up_votes, 
			vote_counts.down_votes, 
			user_vote_value
	`, user.ID).Scan(&posts)
	if result.Error != nil {
		log.Fatal("cannot get posts")
	}
	return posts
}

func GetPostById(user *models.User, postId int) PostResponse {
	var post PostResponse
	result := database.DB.Raw(`
		SELECT 
			posts.id, 
			posts.content, 
			posts.title, 
			posts.user_id,
			posts.created_at,
			tags.name as tag_name, 
			tags.id as tag_id, 
			users.username, 
			vote_counts.up_votes as up_votes_count, 
			vote_counts.down_votes as down_votes_count,
			COUNT(comments.id) as comments_count,
			(SELECT votes.user_id FROM "votes" where votes.post_id = posts.id AND votes.user_id = ?) AS user_vote_value
		FROM posts

		JOIN tags ON posts.tag_id = tags.id 
		JOIN users ON posts.user_id = users.id 
		JOIN vote_counts ON posts.vote_count_id = vote_counts.id 
		LEFT JOIN comments ON comments.post_id = posts.id 
		
		WHERE posts.id = ?

		GROUP BY 
			posts.id, 
			posts.content, 
			posts.title, 
			posts.user_id, 
			tags.name,
			tags.id,
			users.username, 
			vote_counts.up_votes, 
			vote_counts.down_votes, 
			user_vote_value
	`, user.ID, postId).Scan(&post)
	if result.Error != nil {
		log.Fatal("cannot get posts")
	}
	return post
}
