import Layout from '../comps/Layout/layout.js'
import '../styles/globals.css'
import "../styles/Dog.scss"
import { AnimatePresence } from "framer-motion";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp

