import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button } from 'rebass'

const Test = () => {
  const router = useRouter()
  const [alert, setAlert] = useState(false)
  const click = () => {
    router.push('card2')
    setAlert(true)
  }
  return (
    <div>
      {alert && <alert backgroundColor="green">success</alert>}
      <Button backgroundColor={`blue`} margin="20px" onClick={click}>
        Change Page
      </Button>
      <a href="https://www.facebook.com/lifemellow64" target="_blank" rel="noopener noreferrer">
        web
      </a>
      <br />
      <a href="fb://profile/lifemellow64" target="_blank" rel="noopener noreferrer">
        app
      </a>
    </div>
  )
}

export default Test
