import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Flex } from 'rebass'
import styled from 'styled-components'
import { isBrowser, isAndroid } from 'react-device-detect'
const Input = styled.input`
  padding: 15px;
  width: 100%;
  border: 1px solid #b1a4a4;
  border-radius: 5px;
`
const Label = styled.label``

export const FACEBOOK_APP_IOS_BASE_URL = 'fb://profile/'
export const FACEBOOK_APP_ANDROID_BASE_URL = 'fb://facewebmodal/f?href=https://www.facebook.com/'

export const FACEBOOK = 'facebook'

const Test = () => {
  const router = useRouter()
  const [alert, setAlert] = useState(false)
  const [url, setUrl] = useState('')
  const [baseUrl, setBaseUrl] = useState('')

  const click = () => {
    router.push('card2')
    setAlert(true)
  }

  const getProperURL = (url, baseUrl) => {
    return isBrowser
      ? url
      : baseUrl && baseUrl.includes(FACEBOOK)
      ? url.replace(baseUrl, isAndroid ? FACEBOOK_APP_ANDROID_BASE_URL : FACEBOOK_APP_IOS_BASE_URL)
      : url
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
      <Flex flexDirection="column" width={`100%`}>
        <Label htmlFor="url">Past Base URL</Label>

        <Input type="text" placeholder="Past BASE URL" onChange={(e) => setBaseUrl(e.currentTarget.value)} name="url" />
      </Flex>
      <Button backgroundColor="#2de7de" margin={`20px 0`}>
        <a href={getProperURL(url, baseUrl)} target="_blank" rel="noopener noreferrer">
          {`link to ${getProperURL(url, baseUrl)}`}
        </a>
      </Button>
      <a href="fb://profile/abc">abc IOS</a>
      <a href="fb://facewebmodal/f?href=https://www.facebook.com/abc/">abc Android</a>
      <a href="fb://page/abc">abc page</a>

      <Button backgroundColor={`blue`} onClick={() => window.open('https://www.facebook.com/abc/', '_system')}>
        open with OS
      </Button>

      {/* <a href="fb://profile/lifemellow64" target="_blank" rel="noopener noreferrer">
        app facebook
      </a> */}
    </Flex>
  )
}

export default Test
