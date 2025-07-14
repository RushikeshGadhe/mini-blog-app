import React from 'react';

function BlogDetail({ blog, onBack }) {
  return (
    <div>
      <button onClick={onBack} style={{ marginBottom: '20px' }}>← Back</button>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
    </div>
  );
}

export default BlogDetail;
