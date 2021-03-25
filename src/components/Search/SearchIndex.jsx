import React from 'react';
import {Input} from 'reactstrap';
 
export default class SearchIndex extends React.Component{
   constructor(props){
     super(props);
     this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     searchTerm:'',
     results:['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
   }
   this.searchFunction=this.searchFunction.bind(this);
  }
 

  searchFunction(e) {
    e.preventDefault();
    this.setState({searchTerm:e.target.value})
    let res=this.state.things.filter((item)=>item.indexOf(e.target.value)>-1);
    this.setState({results:res});
    }
 render() {
   return(
    <div>
    <Input onChange={(e)=>this.searchFunction(e)} value={this.state.searchTerm} placeholder='Search Here' />
    <h3>Results:</h3>
    <ul>
      {this.state.results?.length==0&&<li>No results found</li>}
      {this.state.results?.map((item)=>{
        return(<li>{item}</li>)
      })}
    </ul>
  </div>
   )
     
 }
}
