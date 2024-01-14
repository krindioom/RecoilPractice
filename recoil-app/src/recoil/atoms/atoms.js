import { atom } from "recoil";

export const NotesDataListState = atom({
    key: "notesDataListState",
    default: [],
});

export const DateFilterParameters = atom({
    key: "dateFilterParameters",
    default: [
        {
            name: "year",
            title: "за год",
            filterAction: (arr) => {
                const result = arr.filter((item) => {
                    return item.text[0] === "a";
                });
                return result;
            },
        },

        {
            name: "day",
            title: "за день",
            filterAction: (arr) => {
                const result = arr.filter((item) => {
                    return item.text[0] === "f";
                });
                return result;
            },
        },

        {
            name: "all",
            title: "все",
            filterAction: (arr) => {
                return arr;
            },
        },
    ],
});

export const DateFilterCurentState = atom({
    key: "dateFilterState",
    default: "year",
});
