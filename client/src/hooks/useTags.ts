import { RootState } from "../state/store";
import { useSelector } from "react-redux";

export const useTags = () => {
    const { tags } = useSelector((state: RootState) => state.tags);
    return tags;
};
