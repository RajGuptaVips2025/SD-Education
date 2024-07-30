import React from 'react'
import ContentBox from '../ContentTopic/ContentBox'
import tailwindTopics from '../../utils/tailwindTopics'
import tailwind from '../../utils/tailwindTopics'
import tailwindImage from '../../assets/tailwind.png'


function TailwindContent() {
  return (
    <>
        <ContentBox topicss={tailwindTopics} image={tailwindImage} />
    </>
  )
}

export default TailwindContent
