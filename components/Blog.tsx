
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <a href={post.href} className="group flex flex-col bg-[#0a0a0a] rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#d10411]/20 hover:-translate-y-1">
    <div className="flex-shrink-0">
      <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
    </div>
    <div className="flex-1 p-6 flex flex-col justify-between">
      <div className="flex-1">
        <p className="text-sm font-medium text-[#D10411]">
          {post.author}
        </p>
        <div className="block mt-2">
          <p className="text-xl font-semibold text-white group-hover:text-gray-200">{post.title}</p>
          <p className="mt-3 text-base text-gray-400">{post.excerpt}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center">
        <div className="text-sm text-gray-500">
            <time dateTime={post.date}>{post.date}</time>
        </div>
      </div>
    </div>
  </a>
);

const Blog: React.FC = () => {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="relative py-32 sm:py-48 flex items-center justify-center text-center">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://picsum.photos/seed/blog-hero/1920/1080')" }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            From the Shop Floor
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, news, and stories from our team of automotive protection experts.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 sm:py-28 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 max-w-lg mx-auto lg:grid-cols-2 lg:max-w-none">
            {BLOG_POSTS.map((post) => (
              <BlogPostCard key={post.title} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
