import { instance } from "../config/axios.config";
import { Post } from "../types";
import useSWR from "swr";

const postFetcher = async (url: string): Promise<Post> => {
    const res = await instance.get(url);
    return res.data;
};

export const usePost = (postId: number) => {
    return useSWR(`/post/${postId}`, postFetcher);
};
