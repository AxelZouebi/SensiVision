import Layout from '../comps/Layout/layout.js'
import '../styles/globals.css'
import styled from 'styled-components'
import "../styles/Dog.scss"


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp

