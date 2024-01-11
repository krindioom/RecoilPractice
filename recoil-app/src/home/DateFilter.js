import { Segmented } from 'antd'
import React from 'react'

const DateFilter = () => {

    

    return (
        <Segmented options={[
            'За сегодня',
            'За неделю',
            'За месяц',
            'За год',
        ]} />
    )
}

export default DateFilter