import React from 'react'
import ContentBox from '../ContentTopic/ContentBox'
import jsTopic from '../../utils/jsTopics'
import contentjs from '../../assets/contentjs.jpg'

function JavascriptContent() {
  return (
    <>
    <ContentBox topicss={jsTopic} image={contentjs} />
    </>
  )
}

export default JavascriptContent