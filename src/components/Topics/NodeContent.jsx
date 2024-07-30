import React from 'react'
import ContentBox from '../ContentTopic/ContentBox'
import nodejsTopics from '../../utils/nodejsTopics'
import node_mini_logo from '../../assets/nodejs_mini_logo.jpg'

function NodeContent() {
  return (
    <>
    <ContentBox topicss={nodejsTopics} image={node_mini_logo} />
    </>
  )
}

export default NodeContent