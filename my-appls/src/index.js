import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let posts = [
  {id: 1, post: "it is good",like: 5},
  {id: 2, post: "You are so cool",like: 6},
  {id: 3, post: "wow? it is great", like: 3},
  {id: 4, post: "Ha ha ha", like: 0},
]


ReactDOM.render(
  <App posts={posts} />,
  document.getElementById('root')
);
 