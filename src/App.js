import { Component } from "react";
import './App.css';
import axios from "axios";



export default class App extends Component{
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    const users = axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => this.setState({users : res.data}))
  }

  render(){
    return (
        <div>
          {this.state.users.map(user =>
              <div key={user.id}>
                <p>name: {user.name}</p>
                <p>email: {user.email}</p>
                <hr/>
              </div>)}
        </div>)
  }
}
