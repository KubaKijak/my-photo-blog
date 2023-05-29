import React from 'react';

const PostList = ({ posts, handlePostClick }) => {
  return (
    <div>
      <h2>Recent Posts</h2>
      {posts.map((post) => (
        <div key={post.id} onClick={() => handlePostClick(post.id)}>
          <h3>{post.title}</h3>
          <img src={post.image} alt={post.title} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
