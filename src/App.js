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
        .catch(function (error) {
              if (error.response) {
      // Request made and server responded
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
              }
              else if (error.request) {
      // The request was made but no response was received
                  console.log(error.request);
              }
              else {
      // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
              }

  });
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
