import React from 'react'
import SideBar from '../SideBar/SideBar'
import TopicContent from '../Topics/TopicContent'

function ContentBox(props) {
    return (
        <>
        <div className="pt-[85px] flex bg-gradient-to-b from-[#0d253c] to-[#111827]">
            <SideBar topics={props.topicss} />
            <TopicContent topics={props.topicss} image={props.image} />
        </div>
        </>
    )
}

export default ContentBox