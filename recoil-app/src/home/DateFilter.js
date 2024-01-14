import { Segmented } from "antd";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    DateFilterCurentState,
    DateFilterParameters,
} from "../recoil/atoms/atoms";

const DateFilter = () => {
    const dateFilterValues = useRecoilValue(DateFilterParameters);

    const options = dateFilterValues.reduce((acc, item) => {
        acc[item.title] = item.name;
        return acc;
    }, {});

    const setCurentFilterValue = useSetRecoilState(DateFilterCurentState);
    return (
        <Segmented
            options={dateFilterValues.map((item) => item.title)}
            onChange={(value) => setCurentFilterValue(options[value])}
        />
    );
};

export default DateFilter;
