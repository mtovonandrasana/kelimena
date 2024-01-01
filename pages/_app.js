import '@styles/globals.css'
import '@assets/css/shine.css'

function Application({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default Application
