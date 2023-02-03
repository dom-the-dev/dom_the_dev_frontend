import React from 'react';
import Layout from "../components/Layouts";
import axios from "axios";


const Youtube = ({youtube}) => {

  return (
    <Layout title={'YouTube'}>
      {youtube.map((video: any, index: number) => {
        let {snippet} = video;
        return (
          <div key={video.id.videoId}>
            {/*<p>{snippet.description}</p>*/}
            <a
              className="block mt-2"
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank"
              rel="noopener noreferrer">
              <h4>{index < 9 ? "0" : ""}{index + 1}.{" "}{snippet.title}</h4>
            </a>
          </div>
        )
      })}
      <a href="https://www.youtube.com/c/Domthedeveloper/" target="_blank" rel="noreferrer noopener">More</a>
    </Layout>
  );
};

export async function getStaticProps() {
  const latestYouTube = await axios.get(`${process.env.NEXT_PUBLIC_YT_API_URL}?key=${process.env.NEXT_PUBLIC_YT_API_KEY}&channelId=${process.env.NEXT_PUBLIC_YT_CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`)

  return {
    props: {
      youtube: latestYouTube.data.items.filter((item: any) => item.id.kind === 'youtube#video')
    },
  }
}

export default Youtube;
