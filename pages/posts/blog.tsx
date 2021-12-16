function Blog({ posts }: any) {
  {
    console.log('render');
  }
  return (
    <ul>
      {posts?.map((post: any) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}
export async function getStaticProps() {
  console.log('data');
  const posts = [
    {
      title: 'title 1',
    },
    {
      title: 'title 2',
    },
  ];
  return {
    props: {
      posts,
    },
  };
}
export default Blog;
