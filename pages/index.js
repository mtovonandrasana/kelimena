import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import UnderConstruction from '@components/UnderConstruction'
import MtoProfile from '@components/MtoProfile'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to MTO!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hey, I'm Michaël" />
        <MtoProfile className="description" />
        <UnderConstruction />
      </main>

      <Footer />
    </div>
  )
}
