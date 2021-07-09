import { Component } from "react";
import './App.css';
import API_URL from "./constants";


export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    API_URL.get(`/users`)
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
