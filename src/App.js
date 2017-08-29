import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      followers: [],
    }
  }
  call(value){
      console.log(value)
      let url = 'https://api.github.com/users/' + value + '/followers';
      console.log(url)
      fetch(url)
        .then((response)=>response.json())
        .then(response=>{
          if(response.message===undefined)
            this.prepper(response)
            else
            this.setState({followers: []})
      })
    
  }
  prepper(followers){
    let list=[]
    followers.map((v,index)=>{
      list.push(<li key={index}><img src={v.avatar_url} alt="avatar"/><a href={v.html_url}>{v.login}</a></li>)
    })
    /*followers.forEach(v){
      list.push(<li><img src={v.avatar_url}/><a href={v.html_url}>{v.login}</a></li>)
    }*/
    this.setState({followers:list});
  }
  render() {
    return (
      <div className="App">
        <div id="main">
          <div id="logo">followGit</div>
            <input type="text" onChange={(e)=>{this.call(e.target.value)}}/>
          <ul>
            {this.state.followers}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
