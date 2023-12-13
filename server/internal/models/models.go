package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Username       string `gorm:"unique"`
	HashedPassword string
	FirstName      string
	LastName       string
	Email          string `gorm:"unique"`
	ImageUrl       string
	Posts          []Post    `gorm:"foreignKey:UserId"`
	Comments       []Comment `gorm:"foreignKey:UserId"`
}

type Post struct {
	gorm.Model
	Title       string
	Content     string
	UserId      int
	TagId       int
	VoteCountId int
	Comments    []Comment `gorm:"foreignKey:PostId"`
}

type Comment struct {
	gorm.Model
	content     string
	UserId      int
	PostId      int
	VoteCountId int
	ParentId    int
}

type Tag struct {
	gorm.Model
	Name  string `gorm:"unique"`
	Posts []Post `gorm:"foreignKey:TagId"`
}

type VoteCount struct {
	gorm.Model
	Post      Post    `gorm:"foreignKey:VoteCountId"`
	Comment   Comment `gorm:"foreignKey:VoteCountId"`
	UpVotes   int     `gorm:"default:0"`
	DownVotes int     `gorm:"default:0"`
}
