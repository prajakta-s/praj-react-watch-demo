import React, { Component } from 'react';
import classes from './App.module.css';
import ProductData from './Productdata';
import Productpreview from './Productpreview';
import Productdetails from './Productdetails';

class App extends Component {
  state={
    productdata: ProductData,
    // currentpreviewimage: 'https://imgur.com/iOeUBV7.png',
    currentpreviewimagepos: 0,
    showbeatsection: false
  }
  onclickcolor =(pos)=>{
    // const updatedpreviewimage= this.state.productdata.colorOptions[pos].imageUrl 
    // console.log(updatedpreviewimage)
    this.setState({currentpreviewimagepos:pos });
  }

  onfeatureitemclick=(pos)=>{
    console.log(pos)
    let updatedstate= false;
    if (pos===1){
      updatedstate= true;
    }
    this.setState({showbeatsection: updatedstate })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <nav className={classes.Topbar}>
            <img src="https://images-na.ssl-images-amazon.com/images/I/31%2BDgxPWXtL.jpg" alt="Amazon logo"/>
          </nav>
        </header>
        <div className={classes.Maincontainer}>
          <div className={classes.Productpreview}>
          <Productpreview currentpreviewimage={this.state.productdata.colorOptions[this.state.currentpreviewimagepos].imageUrl}
           showbeatsection={this.state.showbeatsection}/>
  
          </div>
          <div className={classes.Productdata}>
            <Productdetails data={this.state.productdata} onclickcolor={this.onclickcolor} 
            currentpreviewimagepos={this.state.currentpreviewimagepos}
            onfeatureitemclick={this.onfeatureitemclick} showbeatsection={this.state.showbeatsection}/>
          </div>
        </div>
      </div>
    );
  }
  
  }
  
  
export default App;
