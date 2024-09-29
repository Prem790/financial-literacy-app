import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Community() {
  const [posts, setPosts] = useState([
    { id: 1, author: 'Jane Doe', content: 'Just started my investment journey!', likes: 5 },
    { id: 2, author: 'John Smith', content: 'Any tips for first-time investors?', likes: 3 },
  ]);

  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([...posts, { id: posts.length + 1, author: 'You', content: newPost, likes: 0 }]);
      setNewPost('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mt-20 p-6"
    >
      <h2 className="text-2xl font-bold mb-6">Community Forum</h2>
      <form onSubmit={handlePostSubmit} className="mb-6">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded mb-2"
          placeholder="Share your thoughts..."
          rows="3"
        ></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Post</button>
      </form>
      <div className="space-y-4">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <h3 className="font-semibold">{post.author}</h3>
            <p className="mt-2">{post.content}</p>
            <div className="mt-2 text-sm text-gray-400">
              Likes: {post.likes} · <button className="text-blue-400">Like</button> · <button className="text-blue-400">Reply</button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Community;