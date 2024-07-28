import React from 'react'
import SideBar from '../SideBar/SideBar'
import reactTopics from '../../utils/reactTopics'
import ReactTopic from '../Topics/ReactTopic'

function ReactContect() {
    return (
        <>
        <div className="mt-[85px] flex">
            <SideBar topics={reactTopics} />
            <ReactTopic/>
        </div>
        </>
    )
}

export default ReactContect