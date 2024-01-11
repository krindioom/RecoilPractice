import { Descriptions } from 'antd'
import React from 'react'

const TodosTotalInfo = () => {
    const todosTotalFields = {
        totalItems: 0,
        itemsCompleted: 0,
        itemsUncompleted: 0,
        completedPercent: 100000000000000,
    }

    return (

        <Descriptions className='todos-total-info' column={1} colon={false} title='Todo Info'>
            <Descriptions.Item label='total items: '>{todosTotalFields.totalItems}</Descriptions.Item>
            <Descriptions.Item label='items completed: '>{todosTotalFields.itemsCompleted}</Descriptions.Item>
            <Descriptions.Item label='items uncompleted: '>{todosTotalFields.itemsUncompleted}</Descriptions.Item>
            <Descriptions.Item label='items completed %: '>{todosTotalFields.completedPercent}</Descriptions.Item>
        </Descriptions>

    )
}

export default TodosTotalInfo