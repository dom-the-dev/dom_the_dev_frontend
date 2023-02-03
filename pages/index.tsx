import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layouts";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
        <p className={""}>A JavaScript Developer: Never tired of learning and always up for new projects.</p>
    </Layout>
  )
}

export default Home
