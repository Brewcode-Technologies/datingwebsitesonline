import Container from "./Container";
import Title from "./Title";
import Link from "next/link";
import { Calendar, User, ArrowRight, Heart, MessageCircle } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Creating the Perfect Dating Profile",
      excerpt: "Learn how to make your dating profile stand out and attract the right matches with these expert tips.",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Dating Tips",
      image: "/blog/dating-profile-tips.jpg",
      href: "/blog/perfect-dating-profile-tips"
    },
    {
      id: 2,
      title: "Senior Dating: Finding Love After 50",
      excerpt: "Discover the best dating platforms and strategies for mature singles looking for meaningful relationships.",
      author: "Michael Chen",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      category: "Senior Dating",
      image: "/blog/senior-dating.jpg",
      href: "/blog/senior-dating-guide"
    },
    {
      id: 3,
      title: "Online Dating Safety: Protecting Yourself",
      excerpt: "Essential safety tips and red flags to watch out for when dating online to ensure a secure experience.",
      author: "Emily Rodriguez",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Safety",
      image: "/blog/dating-safety.jpg",
      href: "/blog/online-dating-safety"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <Container>
        <div className="text-center mb-12">
          <Title className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
            Dating Insights & Tips
          </Title>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice, success stories, and the latest trends in online dating to help you find your perfect match.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 sm:h-52 bg-gradient-to-br from-purple-200 to-pink-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="w-16 h-16 text-purple-300 group-hover:text-purple-400 transition-colors" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-purple-700 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post.readTime}
                  </span>
                  
                  <Link
                    href={post.href}
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm group-hover:translate-x-1 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-300 to-pink-300 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-400 hover:to-pink-400 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;