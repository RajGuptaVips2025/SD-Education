import React from 'react'
import SideBar from '../SideBar/SideBar'
import NextTopic from '../Topics/NextTopic'
import nextjsTopics from '../../utils/nextjsTopics'

function NextjsContect() {
    return (
        <>
        <div className="mt-[85px] flex">
            <SideBar topics={nextjsTopics} />
            <NextTopic/>
        </div>
        </>
    )
}

export default NextjsContect