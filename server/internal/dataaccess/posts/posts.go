package posts

import (
	"log"

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
	ID             string
	Title          string
	Content        string
	TagName        string
	UserId         int
	Username       string
	UpVotesCount   int
	DownVotesCount int
	CommentsCount  int
}

func GetAllPosts() []PostResponse {
	var posts []PostResponse
	// result := database.DB.InnerJoins("tags").Find(&posts)
	result := database.DB.Model(&models.Post{}).Select(
		"posts.id, posts.content, posts.title, posts.user_id, tags.name as tag_name, users.username, vote_counts.up_votes as up_votes_count, vote_counts.down_votes as down_votes_count, count(comments.id) as comments_count",
	).Joins(
		"join tags on tags.id = posts.tag_id",
	).Joins(
		"join users on users.id = posts.user_id",
	).Joins(
		"join vote_counts on vote_counts.id = posts.vote_count_id",
	).Joins(
		"left join comments on posts.id = comments.post_id",
	).Group(
		"posts.id, posts.content, posts.title, posts.user_id, tags.name, users.username, vote_counts.up_votes, vote_counts.down_votes",
	).Scan(&posts)
	if result.Error != nil {
		log.Fatal("cannot retrieve tags")
	}
	return posts
}

// SELECT posts.id, tags.name, users.username, COUNT(comments.id) FROM "posts" JOIN "tags" ON posts.tag_id = tags.id JOIN "users" ON posts.user_id = users.id JOIN "vote_counts" ON posts.vote_count_id = vote_counts.id LEFT JOIN comments ON comments.post_id = posts.id GROUP BY posts.id, tags.name, users.username;

// SELECT posts.id, tags.name, users.username FROM "posts" JOIN "tags" ON posts.tag_id = tags.id JOIN "users" ON posts.user_id = users.id JOIN "vote_counts" ON posts.vote_count_id = vote_counts.id LEFT JOIN comments ON comments.post_id = posts.id GROUP BY posts.id, tags.name, users.username;
