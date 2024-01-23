export type Comment = {
    ID: number;
    Content: string;
    UserId: number;
    Username: string;
    PostId: number;
    VoteCountId: number;
    ParentId: number;
    CreatedAt: string;
    CommentsCount: number;
    UserVoteValue: number;
};
