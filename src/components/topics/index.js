import React, { useState, useEffect } from 'react'
import { get } from '../../api'

const Topics = () => {
  const [topics, setTopics] = useState(null)

  useEffect(() => {
    get('/topics').then(setTopics)
  }, [])

  return topics ? (
    <ul>
      {topics.map(topic => (
        <li>{topic.shortTitle}</li>
      ))}
    </ul>
  ) : null
}

export default Topics
