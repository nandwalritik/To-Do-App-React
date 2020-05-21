import React , { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
class ToDos extends Component{
    update = (title,id)=>{

        this.props.update(title,id);
 
    }
    
    render(){
       return this.props.todos.map((todo) =>(
           <div>
               <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} update={this.update}/>
           </div>
       )); 
    }
}
//PropTypes
ToDos.propTypes={
    todos:PropTypes.array.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired,
    update:PropTypes.func.isRequired,
}

export default ToDos;

