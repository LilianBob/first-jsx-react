import React from 'react';

const App = (props) => {
    return(
        <div className ="jumbotron">
            <h1> {props.title} </h1>
            <h3 > {props.header} </h3>
            <p> {props.lead} </p>
        </div>
    );
}

export default App;