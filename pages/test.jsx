import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Flex } from 'rebass'
import styled from 'styled-components'
import { isBrowser } from 'react-device-detect'
const Input = styled.input`
  padding: 15px;
  width: 100%;
  border: 1px solid #b1a4a4;
  border-radius: 5px;
`
const Label = styled.label``

const Test = () => {
  const router = useRouter()
  const [alert, setAlert] = useState(false)
  const [url, setUrl] = useState('')
  const click = () => {
    router.push('card2')
    setAlert(true)
  }

  return (
    <Flex flexDirection={`column`} margin="30px">
      {alert && <alert backgroundColor="green">success</alert>}
      <Button backgroundColor={`blue`} onClick={click} margin={`20px 0`}>
        Change Page
      </Button>
      <Flex flexDirection="column" width={`100%`}>
        <Label htmlFor="url">Past URL</Label>

        <Input type="text" placeholder="Past URL" onChange={(e) => setUrl(e.currentTarget.value)} name="url" />
      </Flex>
      <Button backgroundColor="#2de7de" margin={`20px 0`}>
        <a
          href={isBrowser ? url : url.replace('https://www.facebook.com', 'fb://page')}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`link to ${isBrowser ? url : url.replace('https://www.facebook.com', 'fb://page')}`}
        </a>
      </Button>
      <a href="fb://profile/abc">abc IOS</a>
      <a href="fb://facewebmodal/f?href=https://www.facebook.com/abc/">abc Android</a>
      <a href="fb://page/abc">abc page</a>

      {/* <a href="fb://profile/lifemellow64" target="_blank" rel="noopener noreferrer">
        app facebook
      </a> */}
    </Flex>
  )
}

export default Test
