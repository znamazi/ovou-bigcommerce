import React, { useState } from 'react'
import { Flex } from 'rebass'
import styled from 'styled-components'

const Input = styled.input`
  padding: 10px;
  width: 300px;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 30px;
`

const Card2 = () => {
  const [inputValue, setInputValue] = useState('')
  const [inputValue2, setInputValue2] = useState('')

  return (
    <Flex flexDirection={`column`} margin="20px">
      <Input
        name="handle"
        id="card-details-profile-link"
        value={inputValue}
        autoCapitalize="none"
        aria-describedby="card-details-profile-link-feedback"
        aria-invalid="true"
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <Input
        name="handle"
        value={inputValue2}
        aria-describedby="card-details-profile-link-feedback"
        aria-invalid="true"
        onChange={(e) => setInputValue2(e.currentTarget.value)}
      />
      <div className="card">
        <div className="card__texture"></div>
      </div>
    </Flex>
  )
}

export default Card2
