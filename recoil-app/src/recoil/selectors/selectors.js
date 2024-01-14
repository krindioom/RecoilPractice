import { selector } from "recoil";
import { DateFilterCurentState, DateFilterParameters } from "../atoms/atoms";

export const DateFilterSelector = selector({
    key: "dateFilterSelector",
    get: ({ get }) => {
        const curent = get(DateFilterCurentState);

        const filtered = get(DateFilterParameters).find(
            (x) => x.name === curent
        );
        console.log(curent);
        return filtered;
    },
});
