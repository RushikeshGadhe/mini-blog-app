import React, { useState, useEffect } from 'react';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import SearchBar from './components/SearchBar';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error('Error fetching:', err));
  }, []);

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📝 Mini Blog App</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {selectedBlog ? (
        <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlog(null)} />
      ) : (
        <BlogList blogs={filteredBlogs} onSelectBlog={setSelectedBlog} />
      )}
    </div>
  );
}

export default App;
