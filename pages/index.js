import Link from 'next/link'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Layout from '../components/layout'
import Container from '../components/container'
import Intro from '../components/intro'
import HeroPost from '../components/hero-post'

export default function Home() {
  return (
    <Layout>
      <Head>
      <title>Visual Computing Blog</title>
      </Head>
      <Container>
        <Intro/>
        <HeroPost
              title={"heroPost.title"}
              coverImage={"heroPost.coverImage"}
              date={"2020-08-02 20:00"}
              author={"heroPost.author"}
              slug={"heroPost.slug"}
              excerpt={"heroPost.excerpt"}
            />
        <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
          <a>About</a>
        </Link>
      </Container>
    </Layout>
  )
}
