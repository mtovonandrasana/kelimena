import Head from 'next/head'
import MainLayout from '@components/MainLayout'

export default function Home() {
  return (
    <>
      <Head>
          <title>Michael T. - Resume</title>

          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Mtovonandrasana Profolio"/>
          <meta name="author" content="Xiaoying Riley at 3rd Wave Media"/>
          <meta name="edit" content="Mtovonandrasana" /> 

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"  />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout />
    </>
   
  )
}
