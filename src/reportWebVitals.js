import React from 'react';

const PostList = ({ posts, deletePost }) => {
  return (
    <div className="post-container">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <img src={post.image} alt="Post" className="post-image" />
          <h3 className="post-title">{post.title}</h3>
          <p className="post-text">{post.text}</p>
          <button onClick={() => deletePost(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
