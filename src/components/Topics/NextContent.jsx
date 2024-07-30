import React from 'react'
import ContentBox from '../ContentTopic/ContentBox'
import nextjsTopics from '../../utils/nextjsTopics'
import contentnextjs from '../../assets/contentnextjs.png'

function NextContent() {
  return (
    <>
    <ContentBox topicss={nextjsTopics} image={contentnextjs} />
    </>
  )
}

export default NextContent