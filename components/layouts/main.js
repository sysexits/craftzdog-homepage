import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jaehyun Jang" />
        <meta name="author" content="Jaehyun Jang" />
        <meta name="author" content="sysexits" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sysexits" />
        <meta name="twitter:creator" content="@sysexits" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Jaehyun Jang" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Jaehyun Jang - VR and Haptics Researcher</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="xl" pt={14}>
        
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
