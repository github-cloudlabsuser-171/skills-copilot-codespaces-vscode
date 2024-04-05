import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('Type markdown here');

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea value={markdown} onChange={handleMarkdownChange} />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export { MarkdownEditor };

// take a sentence as input
// reverse the input sentence
// the start of the sentence must start with a capital
// for javascript
// As an illustration, pull names out of the data array

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('Type markdown here');

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea value={markdown} onChange={handleMarkdownChange} />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export { MarkdownEditor };

// take a sentence as input
// reverse the input sentence
// the start of the sentence must start with a capital
// for javascript

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('Type markdown here');

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea value={markdown} onChange={handleMarkdownChange} />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default MarkdownEditor;
// Map through an array of arrays of objects
// Example: Extract names from the data array
// Desired outcome: ['John', 'Jane', 'Bob']

const data = [
  [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 },
  ],
  [
    { name: 'Alice', age: 20 },
    { name: 'Eve', age: 40 },
  ],
];

const names = data.flatMap((array) => array.map((obj) => obj.name));
console.log(names);
