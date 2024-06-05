import Head from 'next/head';

interface PostMetaProps {
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

const PostMeta = (props: PostMetaProps) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.subtitle}></meta>

      {/* 오픈 그래프 메타데이터 */}
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.subtitle} />
      <meta property="og:image" content={props.image} />

      {/* 트위터 카드 메타데이터 */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.description} />
      <meta property="twitter:image" content={props.image} />
    </Head>
  );
};

export default PostMeta;
