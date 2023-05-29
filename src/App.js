import React, { useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);

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

  return (
    <div className="App">
      <h1>My Photo Blog</h1>
      {selectedPost ? (
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
        </div>
      )}
    </div>
  );
}

export default App;
