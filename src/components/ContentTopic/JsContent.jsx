import React from 'react'
import SideBar from '../SideBar/SideBar'
import JsTopic from '../Topics/JsTopic'
import jsTopics from '../../utils/jsTopics'

function JsContent() {
    return (
        <>
        <div className="mt-[85px] flex">
            <SideBar topics={jsTopics} />
            <JsTopic/>
        </div>
        </>
    )
}

export default JsContent