import React from 'react';
import CardList from './Component/CardList/CardList';
import './App.css';
//import {CardList} from './Component/CardList/CardList.js'


class App extends React.Component{

  constructor(){
    super();
    this.state={
      users:[],
      searchfeild:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=>response.json())
     .then(data=> this.setState({users:data}),console.log(this.state.users));
  }



  render(){

console.log(this.state.users)



const filteredRobot=this.state.users.filter(searchfeild => searchfeild.name.toLowerCase().includes(this.state.searchfeild));

    return(
        <div className="App">
          <h1>Robofriends</h1>
          <input type="text"  placeholder="search robots"  onChange={(e)=>this.setState({searchfeild:e.target.value})}/>
    
          <CardList users={filteredRobot}/>
        </div>
      );
  }
}

export default App;



