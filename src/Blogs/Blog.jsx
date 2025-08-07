import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Strategies to Boost Your Micro-Job Marketplace Profile",
      excerpt: "Learn proven techniques to stand out and attract more clients in the competitive gig economy.",
      category: "Freelancers",
      date: "May 15, 2023",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "How Businesses Are Leveraging Micro-Jobs for Rapid Growth",
      excerpt: "Discover how startups and enterprises are using micro-task platforms to scale efficiently.",
      category: "Clients",
      date: "June 2, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "The Future of Work: Micro-Jobs in 2023 and Beyond",
      excerpt: "Industry experts predict how micro-task platforms will evolve in the coming years.",
      category: "Trends",
      date: "June 18, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Latest in the Blog</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, tips and trends for freelancers and clients in the micro-job economy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-600 bg-cyan-50 rounded-full">
                    {post.category}
                  </span>
                  <span className="ml-auto text-sm text-gray-500">
                    {post.date} · {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <button className="text-blue-500 font-medium flex items-center hover:text-blue-600 transition-colors">
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium py-3 px-8 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all shadow-md hover:shadow-lg inline-flex items-center">
            View All Articles
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;