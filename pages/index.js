import Head from 'next/head'
import styled from 'styled-components'

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 10em;
  font-weight: 800;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>Next</Heading>
      </Hero>
    </>
  )
}
