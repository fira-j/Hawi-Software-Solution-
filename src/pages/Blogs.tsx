import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const Blogs = () => {
  // Array of blog posts - easily add new posts by adding objects to this array
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      description: "Explore the latest trends in web development, including AI-powered tools, modern frameworks, and best practices that are shaping the future of digital experiences.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      date: "January 15, 2024",
      readTime: "5 min read",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Building Scalable Mobile Applications: A Complete Guide",
      description: "Learn how to build mobile applications that scale with your business. Discover strategies for architecture, performance optimization, and user experience.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      date: "January 10, 2024",
      readTime: "7 min read",
      category: "Mobile Development",
    },
    {
      id: 3,
      title: "Cloud Computing Solutions: Transforming Business Operations",
      description: "Understand how cloud computing is revolutionizing business operations. Explore cloud migration strategies, cost optimization, and security best practices.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      date: "January 5, 2024",
      readTime: "6 min read",
      category: "Cloud Services",
    },
    {
      id: 4,
      title: "UI/UX Design Principles for Modern Applications",
      description: "Master the art of creating intuitive and beautiful user interfaces. Learn about design systems, user research, and accessibility in modern web design.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      date: "December 28, 2023",
      readTime: "8 min read",
      category: "Design",
    },
    {
      id: 5,
      title: "Cybersecurity Best Practices for Software Companies",
      description: "Protect your software and data with industry-leading security practices. Learn about threat detection, encryption, and secure development lifecycle.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      date: "December 20, 2023",
      readTime: "6 min read",
      category: "Security",
    },
    {
      id: 6,
      title: "Agile Development: Improving Team Productivity",
      description: "Discover how Agile methodologies can transform your development process. Learn about sprints, standups, and continuous improvement practices.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      date: "December 15, 2023",
      readTime: "5 min read",
      category: "Development",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stay updated with the latest insights, trends, and news in software development, 
              technology, and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="card-glass rounded-2xl overflow-hidden hover-glow group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6 space-y-4">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {post.description}
                  </p>

                  {/* Read More Button */}
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                  >
                    <Link to={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More / Pagination (Optional - for future implementation) */}
          {blogPosts.length > 0 && (
            <div className="mt-16 text-center animate-fade-in">
              <p className="text-muted-foreground mb-4">
                Showing {blogPosts.length} blog posts
              </p>
              {/* You can add pagination or load more functionality here in the future */}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="card-glass rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Want to <span className="text-gradient">Collaborate</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can help bring your vision to life.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;

