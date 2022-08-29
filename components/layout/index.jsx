import React from 'react'
import dynamic from 'next/dynamic'
import { useAcceptCookies } from '../../hooks/useAcceptCookies'
import { AcceptCookie } from '../common/button/button.style'
const FeatureBar = dynamic(() => import('../common/featureBar'))

const Layout = () => {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
  return (
    <div>
      Layout
      <FeatureBar
        title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
        hide={acceptedCookies}
        action={<AcceptCookie onClick={() => onAcceptCookies()}>Accept cookies</AcceptCookie>}
      />
    </div>
  )
}

export default Layout
