import { getBlogPosts } from "@/app/actions/adminActions";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const posts = await getBlogPosts();

  const post = posts.find((p: any) => p.slug === params.slug);

  if (!post) {
    notFound(); // shows 404 page
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black mb-4">{post.title}</h1>
      <p className="text-slate-500 mb-6">
        {new Date(post.date).toLocaleDateString()} • {post.readTime}
      </p>

      <img
        src={post.image}
        alt={post.title}
        className="w-full h-96 object-cover rounded-2xl mb-8"
      />

      <article className="prose prose-lg max-w-none">
        {post.content}
      </article>
    </main>
  );
}
