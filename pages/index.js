import BlogPost from '@/components/BlogPost';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import Link from 'next/link';
import Container from '../components/Container';
import Subscribe from '../components/Subscribe';


const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}


export default function Home({ posts }) {
  const sortedPosts = posts.sort(
    (a, b) =>
      Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Hammas Hamzah
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I am a software engineer and creator. My current interests are in the areas of full-stack development, one person startup, and workspace setup. I am trying to actively tweets on <ExternalLink href="https://twitter.com/hammashamzah"><a>@hammashamzah</a></ExternalLink>.
        </h2>

        <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">Latest writings</h2>
        {sortedPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
        {/* <Subscribe /> */}
      </div>
    </Container>
  );
}
