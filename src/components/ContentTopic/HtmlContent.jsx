import React from 'react'
import SideBar from '../SideBar/SideBar'
import CssTopic from '../Topics/CssTopic'
import HtmlTopic from '../Topics/HtmlTopic'
import htmlTopics from '../../utils/htmlTopics'
import cssTopics from '../../utils/cssTopics'

function HtmlContent() {
    return (
        <>
        <div className="mt-[85px] flex">
            <SideBar topics={cssTopics} />
            <HtmlTopic/>
        </div>
        </>
    )
}

export default HtmlContent