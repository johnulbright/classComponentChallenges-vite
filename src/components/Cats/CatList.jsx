import React, { Component } from 'react';
 
export default class CatList extends Component {
  constructor(props){
    super(props);
  } 
  render(){
  console.log("catlist props",this.props)
  return (
   <div>
     <h3>Here are some breeds of cats:</h3>
     {this.props.cats.map(cat => {
     return(<li key={cat}>{cat}</li> )})}
   </div>
 );
}
}
 