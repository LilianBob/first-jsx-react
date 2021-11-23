// import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';

const props = {
  title: "React JSX",
  header: "We made it!",
  lead: " Learn more",
};

ReactDOM.render(
  App(props),
  document.getElementById('root')
);
// equivalent to:
// ReactDOM.render(App(), document.getElementById("root"));
