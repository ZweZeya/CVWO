import { RootState } from "../state/store";
import { useSelector } from "react-redux";

export const useCurrentUser = () => {
    return useSelector((state: RootState) => state.user);
};
