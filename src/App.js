import { Component } from "react";
import './App.css';
import API_URL from "./constants";
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";


export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        monsters: [],
        searchField: ``
    };
  }
  componentDidMount() {
    API_URL.get(`/users`)
        .then(res => this.setState({monsters : res.data}))
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

  handleChange = (e) => {
      this.setState({searchField: e.target.value})
  }

  render(){
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()
    ) || monster.email.toLowerCase().includes(searchField.toLowerCase()))
    return (
           <div className="App" >
               <h1>Monsters Rolodex</h1>
               <SearchBox placeholder='search monsters'
                          handleChange={this.handleChange}
               />
               <CardList monsters ={filteredMonsters}/>
           </div>
        )
  }
}
