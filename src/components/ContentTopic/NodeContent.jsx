import React from 'react'
import SideBar from '../SideBar/SideBar'
import NodeTopic from '../Topics/NodeTopic'
import nodejsTopics from '../../utils/nodejsTopics'



function NodeContent() {
    return (
        <>
        <div className="mt-[85px] flex">
            <SideBar topics={nodejsTopics} />
            <NodeTopic/>
        </div>
        </>
    )
}

export default NodeContent
