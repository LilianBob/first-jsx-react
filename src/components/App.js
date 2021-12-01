import React from 'react';

const App = (props) => {
        return(
            <div className="container">
                <div className ="jumbotron" style= {{margin: props.margin, textAlign: "center"}}>
                    <h1> {props.title} </h1>
                    <h3 > {props.header} </h3>
                    <p> <a href="./" className="btn btn-primary">{props.lead}</a> </p>
                </div>
                <div className="row" style= {{height: props.height, margin: props.margin}}>
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
                <div className="row" style= {{margin: props.margin, background: props.color1}}>
                    <div className="col">
                        <div className="card" style={{width:"18rem"}}>
                            <img className="card-img-top" src="./images/kitty.jpg" alt="kitty"></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="./" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{width:"18rem"}}>
                            <img className="card-img-top" src="./images/kitty.jpg" alt="kitty"></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="./" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{width:"18rem"}}>
                            <img className="card-img-top" src="./images/kitty.jpg" alt="kitty"></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="./" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-responsive-sm">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th scope="row">15</th>
                                <td>React</td>
                                <td>
                                    <button onClick={()=> alert(props.reactbtn)}type="submit"><img src={props.source} alt="plus" width="50px" height="50px"></img></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>Vue</td>
                                <td>
                                    <button onClick={()=> alert(props.vuebtn)} type="submit"><img src={props.source} alt="plus" width="50px" height="50px"></img></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Angular</td>
                                <td>
                                <button onClick={()=> alert(props.angularbtn)}type="submit"><img src={props.source} alt="plus" width="50px" height="50px"></img></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        ); 
}

export default App;