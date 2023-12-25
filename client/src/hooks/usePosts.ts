import { instance } from "../config/axios.config";
import { Post } from "../types";
import useSWR from "swr";

const postsFetcher = async (url: string): Promise<Post[]> => {
    const res = await instance.get(url);
    return res.data;
};

export const usePosts = () => {
    return useSWR("/posts", postsFetcher);
};
