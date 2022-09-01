import GlobalStyle from '../styles/GlobalStyle'
import '../styles/card2.css'
import '../styles/metal.css'

const Noop = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop

  return (
    // TODO decide to use context or redux
    <Layout pageProps={pageProps}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
