import React from 'react';
import {
  Package,
  Grid3X3,
  List,
  ChevronRight,
  X,
  Star,
  User,
  ThumbsUp,
  Eye
} from 'lucide-react';

const LatestPosts = ({
  posts,
  viewMode,
  setViewMode,
  setShowViewAll,
  handleShowDetailsModal
}) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
          <Package className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">Latest Posts</h3>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex bg-white/20 rounded-lg p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white/30' : ''}`}
          >
            <Grid3X3 className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded ${viewMode === 'list' ? 'bg-white/30' : ''}`}
          >
            <List className="w-4 h-4 text-white" />
          </button>
        </div>
        <button
          onClick={() => setShowViewAll(true)}
          className="bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-lg transition-colors flex items-center text-sm font-medium"
        >
          <span>View All</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>

    <div className="p-4">
      <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {posts.slice(0, 3).map(post => (
          <div
            key={post.id}
            className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 ${
              viewMode === 'list' ? 'flex space-x-4 p-4' : ''
            }`}
          >
            <img
              src={post.image}
              alt={post.title}
              className={`object-cover ${
                viewMode === 'list' ? 'w-24 h-24 rounded-lg flex-shrink-0' : 'w-full h-40 sm:h-48'
              }`}
            />
            <div className={`${viewMode === 'list' ? 'flex-1' : 'p-4'}`}>
              <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base leading-tight">
                {post.title}
              </h4>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-bold text-emerald-600">${post.price}</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-amber-400 fill-current" />
                  <span className="text-xs text-gray-600">{post.rating}</span>
                </div>
              </div>
              <div className="flex justify-between items-center my-5">
                <div className="flex items-center space-x-2">
                  <User className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-500">by {post.seller}</span>
                </div>
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <ThumbsUp className="w-5 h-5 text-gray-700 cursor-pointer hover:scale-110 transition-all ease-in-out" />
                    <p className="count text-lg">0</p>
                  </div>
                  <Eye className="w-5 h-5 text-gray-700 cursor-pointer hover:scale-110 transition-all ease-in-out" />
                </div>
              </div>
              <button
                onClick={() => handleShowDetailsModal(post)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors font-medium text-sm"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default LatestPosts;
