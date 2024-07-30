import React from 'react'
import ContentBox from '../ContentTopic/ContentBox'
import mongodbTopics from '../../utils/mongodbTopics'

function MongodbContent() {
  return (
    <>
    <ContentBox topicss={mongodbTopics} />
    </>
  )
}

export default MongodbContent