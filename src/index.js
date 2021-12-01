// import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';


const props = {
  title: "React JSX",
  header: "We made it!",
  lead: "Learn more",
  color1: "blue",
  color2: "red",
  color3: "pink",
  color4: "white",
  color5: "green",
  height: "200px",
  margin: "10px 0px"
};

ReactDOM.render(
  App(props),
  document.getElementById("root")
);
// equivalent to:
// ReactDOM.render(<App title="React JSX" header="We made it!" lead ="Learn more" />, document.getElementById("root"));
