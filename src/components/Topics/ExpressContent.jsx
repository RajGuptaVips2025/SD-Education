import React from 'react'
import ContentBox from '../ContentTopic/ContentBox'
import expressTopics from '../../utils/expressTopics'
import express from '../../assets/express_1.jpg'

function ExpressContent() {
  return (
    <>
    <ContentBox topicss={expressTopics} image={express}/>
    </>
  )
}

export default ExpressContent