import React from 'react'
import { Wrapper } from './FeatureBar.style'

const FeatureBar = (props) => {
  const { title, description, action, hide } = props
  return (
    <Wrapper hide={hide}>
      <span className="block md:inline">{title}</span>
      <span className="block mb-6 md:inline md:mb-0 md:ml-2">{description}</span>
      {action && action}
    </Wrapper>
  )
}

export default FeatureBar
