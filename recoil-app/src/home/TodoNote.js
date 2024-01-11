import { Button, Flex } from 'antd';
import React, { useState } from 'react'

const TodoNote = ({info}) => {

    const [text, setText] = useState(info);



    return (
        <div>
            <Flex>
                <p>{text}</p>
                <Button danger onClick={(e) => {
                    console.log('удалена');
                }}>Удалить</Button>
            </Flex>
        </div>
    )
}

export default TodoNote