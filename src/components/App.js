import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            starter: "We made it!",
            nameUser: "",
            count: 0,
        }
    }
    updateCount() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }
    render(){
        return(
            <div className="container">
                <div className ="jumbotron" style= {{margin: this.props.margin, textAlign: "center"}}>
                    <h1> {this.props.title} </h1>
                    <h3 onClick={()=> this.setState({starter: "Parse all our services"})}> {this.state.starter} </h3>
                    <p><a href="./" className="btn btn-primary">{this.props.lead}</a> </p>
                </div>
                <div className="row" style= {{height: this.props.height, margin: this.props.margin}}>
                    <div className="col" style={{background: this.props.color1}}>
                        <h3 style={{color: this.props.color4}}> White on Blue </h3>
                    </div>
                    <div className="col" style={{background: this.props.color2}}>
                        <h3 style={{color: this.props.color1}}> Blue on Red</h3>
                    </div>
                    <div className="col" style={{background: this.props.color3}}>
                        <h3 style={{color: this.props.color5}}> Green on Pink </h3>
                    </div>
                </div>
                <div className="row" style= {{margin: this.props.margin, background: this.props.color1}}>
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
                                    <button onClick={()=> alert(this.props.reactbtn)}type="submit"><img src={this.props.source} alt="plus" width="50px" height="50px"></img></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>Vue</td>
                                <td>
                                    <button onClick={()=> alert(this.props.vuebtn)} type="submit"><img src={this.props.source} alt="plus" width="50px" height="50px"></img></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Angular</td>
                                <td>
                                <button onClick={()=> alert(this.props.angularbtn)}type="submit"><img src={this.props.source} alt="plus" width="50px" height="50px"></img></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="col">
                        <h1> Hello </h1>
                        <button onClick={()=>this.updateCount()} type="submit">click me</button>
                        <p>You clicked me {this.state.count} times</p>
                    </div>
                </div>
            </div>
            
        ); 
    }

}


export default App;