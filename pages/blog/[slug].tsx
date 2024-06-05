import PostHead from '@/components/PostHead';
import posts from '@/data/posts';

export function getServerSideProps({ params }: any) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  return {
    props: {
      post,
    },
  };
}

const Post = ({ post }: any) => {
  return (
    <div>
      <PostHead {...post}>
        <h1> {post.title}</h1>
        <p>{post.subtitle}</p>
      </PostHead>
    </div>
  );
};

export default Post;
