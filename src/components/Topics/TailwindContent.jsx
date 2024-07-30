import React from 'react'
import ContentBox from '../ContentTopic/ContentBox'
import tailwindTopics from '../../utils/tailwindTopics'
import tailwind from '../../utils/tailwindTopics'



function TailwindContent() {
  return (
    <>
        <ContentBox topicss={tailwindTopics} image={tailwind} />
    </>
  )
}

export default TailwindContent
