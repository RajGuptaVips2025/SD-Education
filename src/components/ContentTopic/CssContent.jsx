import React from 'react'
import SideBar from '../SideBar/SideBar'
import CssTopic from '../Topics/CssTopic'
import cssTopics from '../../utils/cssTopics'

function CssContent() {
    return (
        <>
        <div className="mt-[85px] flex">
            <SideBar topics={cssTopics} />
            <CssTopic/>
        </div>
        </>
    )
}

export default CssContent