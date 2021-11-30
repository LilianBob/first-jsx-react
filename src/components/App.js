import React from 'react';

const App = (props) => {
        return(
            <div className="container">
                <div className ="jumbotron">
                    <h1> {props.title} </h1>
                    <h3 > {props.header} </h3>
                    <p> {props.lead} </p>
                </div>
                <div className="row" style= {{height: props.height}}>
                    <div className="col" style={{background: props.color1}}>
                        <h3 style={{color: props.color4}}> White on Blue </h3>
                    </div>
                    <div className="col" style={{background: props.color2}}>
                        <h3 style={{color: props.color1}}> Blue on Red</h3>
                    </div>
                    <div className="col" style={{background: props.color3}}>
                        <h3 style={{color: props.color5}}> Green on Pink </h3>
                    </div>
                </div>
            </div>
            
        ); 
}

export default App;