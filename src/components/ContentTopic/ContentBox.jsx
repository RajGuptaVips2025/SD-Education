import React from 'react'
import SideBar from '../SideBar/SideBar'
import TopicContent from '../Topics/TopicContent'

function ContentBox(props) {
    return (
        <>
        <div className="mt-[85px] flex">
            <SideBar topics={props.topicss} />
            <TopicContent topics={props.topicss}/>
        </div>
        </>
    )
}

export default ContentBox