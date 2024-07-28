import React from 'react'
import SideBar from '../SideBar/SideBar'
import MongodbTopic from '../Topics/MongodbTopic'
import mongodbTopics from '../../utils/mongodbTopics'

function MongodbContent() {
    return (
        <>
        <div className="mt-[85px] flex">
            <SideBar topics={mongodbTopics} />
            <MongodbTopic/>
        </div>
        </>
    )
}

export default MongodbContent
