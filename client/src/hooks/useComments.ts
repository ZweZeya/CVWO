import { instance } from "../config/axios.config";
import { Comment } from "../types";
import useSWR from "swr";

const commentsFetcher = async (url: string): Promise<Comment[]> => {
    const res = await instance.get(url);
    return res.data;
};

export const usePosts = (postId: number) => {
    return useSWR(`/comments/${postId}`, commentsFetcher);
};
