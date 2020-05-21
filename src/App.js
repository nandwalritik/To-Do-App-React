import React , { Component } from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Header from './Components/layout/Header';
import ToDos from './Components/ToDos';
import AddTodo from './Components/AddTodo';
import about from './Components/pages/about';
import uuid from 'uuid';
import './App.css';
class App extends Component{
  state={
    todos:[
      {
        id:uuid.v4(),
        title:'Reading Books',
        completed:false
      },

      {
        id:uuid.v4(),
        title:'Lunch',
        completed:false
      },

      {
        id:uuid.v4(),
        title:'Dinner',
        completed:false
      },
    ]
  };

  //Toggle complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id===id){
            todo.completed=!todo.completed
          } 
          return todo;
        })
      })
  }
  
  //Delete Todo
  delTodo = (id)=>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id!==id)]});
  }
  
  //Add Todo
  addTodo=(title)=>{
    const newTodo={
      id:uuid.v4(),
      title:title,
      completed:false
    }
    this.setState({ todos: [...this.state.todos,newTodo]});
  };
  update = (title,id) => {
    this.state.todos.map(data => {
      if(data.id === id){
        data.title=title
        this.forceUpdate()
      }
    })
  }


  render() {
                  return (
                    <Router>
                        <div className="App">
                          <div className="container">
                            <Header/>
                              <Route exact path="/" render={props=>(
                                <React.Fragment>
                                    <AddTodo addTodo={this.addTodo}/>
                                    <ToDos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} update={this.update}/>
                                </React.Fragment>
                            )}/>
                              <Route path="/about" component={about}/>
                            </div> 
                        </div>
                      </Router>
                );
            }
      }


export default App;
