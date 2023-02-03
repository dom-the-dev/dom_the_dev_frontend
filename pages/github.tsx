import React from 'react';
import Layout from "../components/Layouts";
import axios from "axios";

const Github = () => {
  return (
    <Layout title={'YouTube'}>
      youtube
    </Layout>
  );
};

export async function getStaticProps() {
  const latestGithub = await axios.get(process.env.NEXT_PUBLIC_GITHUB_API_URL + 'users/dom-the-dev/repos?per_page=4&sort=asc')

  return {
    props: {
      repos: latestGithub.data,
    },
  }
}

export default Github;
