import React, { useState } from 'react';
import './App.css';


function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false); // New state for admin panel

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() !== '' && text.trim() !== '' && image.trim() !== '') {
      setPosts([...posts, { title, text, image }]);
      setTitle('');
      setText('');
      setImage('');
    }
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  const handleChatSubmit = (event) => {
    event.preventDefault();
    const message = event.target.elements.message.value;
    if (message.trim() !== '') {
      setChatMessages([...chatMessages, message]);
      event.target.reset();
    }
  };

  const handleAdminLogin = (event) => {
    event.preventDefault();
    const password = event.target.elements.password.value;
    // Replace 'admin123' with your actual admin password
    if (password === 'admin123') {
      setIsAdmin(true);
      event.target.reset();
    }
  };

  const handleDeletePost = (post) => {
    const updatedPosts = posts.filter((p) => p !== post);
    setPosts(updatedPosts);
    setSelectedPost(null);
  };

  return (
    <div className="App">
      <h1>My Photo Blog</h1>
      {isAdmin ? ( // Render admin panel if logged in as admin
        <div>
          <h2>Admin Panel</h2>
          <h3>Posts</h3>
          <ul className="post-list">
            {posts.map((post, index) => (
              <li key={index}>
                <div className="post">
                  <img src={post.image} alt="Post" className="post-image" />
                  <h3 className="post-title">{post.title}</h3>
                  <button onClick={() => handleDeletePost(post)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={() => setIsAdmin(false)}>Logout</button>
        </div>
      ) : selectedPost ? (
        <div>
          <h2>{selectedPost.title}</h2>
          <img src={selectedPost.image} alt="Post" className="post-image" />
          <p>{selectedPost.text}</p>
          <button onClick={handleBackClick}>Back</button>

          <div className="chat-container">
            <h3>Chat</h3>
            <ul className="chat-messages">
              {chatMessages.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
            <form onSubmit={handleChatSubmit}>
              <input type="text" name="message" placeholder="Enter message" />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={handleTitleChange}
            />
            <br />
            <textarea
              placeholder="Enter text"
              value={text}
              onChange={handleTextChange}
            />
            <br />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <br />
            <button type="submit">Post</button>
          </form>
          <div className="post-container">
            {posts.map((post, index) => (
              <div
                key={index}
                className="post"
                onClick={() => handlePostClick(post)}
              >
                <img src={post.image} alt="Post" className="post-image" />
                <h3 className="post-title">{post.title}</h3>
              </div>
            ))}
          </div>
          <form onSubmit={handleAdminLogin}>
            <input
              type="password"
              name="password"
              placeholder="Admin Password"
            />
            <button type="submit">Admin Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
