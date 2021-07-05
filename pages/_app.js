import Layout from '../comps/Layout/Layout.js'
import '../styles/globals.css'
import "../styles/Dog.scss"


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp

