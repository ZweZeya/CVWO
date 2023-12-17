import { instance } from "../config/axios.config";
import User from "../types/User";
import useSWR from "swr";

const fetchUser = async (url: string): Promise<User> => {
    const res = await instance.get(url);
    return res.data;
};

export const useUser = () => {
    return useSWR("/user", fetchUser, {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
            if (error.response.status === 401) {
                return;
            }
        },
    });
};
