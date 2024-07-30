import React from 'react'
import ContentBox from '../ContentTopic/ContentBox'
import cssTopics from '../../utils/cssTopics'
import content_css_mini_logo from '../../assets/content_css_mini_ogo.jpg'

function BootstrapContent() {
  return (
    <>
    <ContentBox topicss={cssTopics} image={content_css_mini_logo}/>
    </>
  )
}

export default BootstrapContent