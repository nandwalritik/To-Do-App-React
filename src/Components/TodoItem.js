import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
             id:this.props.todo.id,
             title:this.props.todo.title
        };
    }

    getStyle = () => {
        return {
            backgroundColor:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.todo.completed?'line-through':'none'
        }
    }

    handleChange=(event)=>{
        this.setState({
            title:event.target.value
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.update(this.state.title,this.state.id);
    }
 
    render() {
        const{ id,title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                     <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '} { title }
                     <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                     <form onSubmit={this.handleSubmit}>
                       <input
                        type="text"
                        name="title"
                        onChange={this.handleChange}
                       />
                       <input type="submit" value="Submit"/>  
                     </form>
                </p>   
            </div>
        )
    }
}
//PropTypes
TodoItem.propTypes={
    todo:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired,
    update:PropTypes.func.isRequired,

}

const btnStyle={
    background: '#ff0000',
    color:'#fff',
    border:'none' ,
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}

const itemStyle = {
    backgroundColor:'#f4f4f4'
}

export default TodoItem
