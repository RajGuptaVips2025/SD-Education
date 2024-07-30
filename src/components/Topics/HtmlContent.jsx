import React from 'react'
import ContentBox from '../ContentTopic/ContentBox'
import htmlTopic from '../../utils/htmlTopics'
import contenthtml from '../../assets/contenthtml.jpg'

function HtmlContent() {
  return (
    <>
    <ContentBox topicss={htmlTopic} image={contenthtml} />
    </>
  )
}

export default HtmlContent