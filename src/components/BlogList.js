import React from 'react';

function BlogList({ blogs, onSelectBlog }) {
  if (blogs.length === 0) return <p>No blog posts found.</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {blogs.map(blog => (
        <li
          key={blog.id}
          onClick={() => onSelectBlog(blog)}
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            marginBottom: '10px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          <strong>{blog.title}</strong>
        </li>
      ))}
    </ul>
  );
}

export default BlogList;
