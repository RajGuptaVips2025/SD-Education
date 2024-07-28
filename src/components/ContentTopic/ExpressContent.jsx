import React from 'react'
import SideBar from '../SideBar/SideBar'
import ExpressTopic from '../Topics/ExpressTopic'
import expressTopics from '../../utils/expressTopics'


function ExpressContent() {
    return (
        <>
        <div className="mt-[85px] flex">
            <SideBar topics={expressTopics} />
            <ExpressTopic/>
        </div>
        </>
    )
}

export default ExpressContent
