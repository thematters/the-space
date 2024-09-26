// import Container from '../components/container'
import MoreStories from "~/components/Posts/MoreStories";
import HeroPost from "~/components/Posts/HeroPost";
import Intro from "~/components/Posts/Intro";
// import Layout from '~/components/Layout'
import { getAllPosts } from "@/lib/api";
import Head from "next/head";
// import { CMS_NAME } from '../lib/constants'
import Post from "~/interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      {/* <Layout> */}
      <Head>
        <title>The Space Latests News & Posts</title>
      </Head>
      <>
        {" "}
        {/* <Container> */}
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </>
      {/* </Layout> */}
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
