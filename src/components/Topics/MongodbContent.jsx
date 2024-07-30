import React from 'react'
import ContentBox from '../ContentTopic/ContentBox'
import mongodbTopics from '../../utils/mongodbTopics'
import contentmongodb from '../../assets/contentmongodb.jpg'

function MongodbContent() {
  return (
    <>
    <ContentBox topicss={mongodbTopics} image={contentmongodb} />
    </>
  )
}

export default MongodbContent