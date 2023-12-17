import { instance } from "../config/axios.config";
import User from "../types/User";
import useSWR from "swr";

const fetchUser = async (url: string): Promise<User> => {
    const res = await instance.get(url);
    return res.data;
};

export const useUser = () => {
    return useSWR("/user", fetchUser);
};
