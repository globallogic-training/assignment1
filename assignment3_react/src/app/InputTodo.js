import React, { Component } from 'react';

class InputTodo extends Component {

    constructor(props) {
        super(props);
        
        this.initialState = {
            title: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { value} = event.target;
        const { id } = this.props;
        console.log('id ', id)
        this.setState({
            id: id,
            title: value,
            done: false

        });
    }
        render() {
        
            return (
                <form >
                <input type="text" className="form-control add-todo" placeholder="Add todo" name = 'todoText' onChange={this.handleChange} value={this.state.title} />
                    <br />
                    <button type = 'button' className="btn btn-primary" onClick={ () => {
                        if(this.state.title && this.state.title !== '')
                            this.props.addTotodoList( this.state )
                            this.setState({
                                ...this.initialState
                            })
                    } }>add To-Do
                    </button>
                   </form>
            )
        }
    
   
}
export default InputTodo;


