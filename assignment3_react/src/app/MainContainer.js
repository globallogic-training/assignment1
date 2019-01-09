import React from 'react';
import TodonotdoneList from './ToDoNotDoneList';
import InputTodo from './InputTodo'

export default class MainContainer extends React.Component {
    
    constructor(props) {
		super(props);
		this.state = {
			data: JSON.parse(localStorage.getItem('dataList')) || []
		};

		// this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount(){
        // this.setState({
        //     data: 
        // })
    }

    handleSubmit = todoData => {
        this.setState({
            data: [...this.state.data, todoData]
        }, () => { localStorage.setItem('dataList', JSON.stringify(this.state.data)) })
    }
    editTodoList = index => {
        let object = this.state.data;
        object[index] = { ...object[index], done: true }
        this.setState({
            data: object
        }, () => { localStorage.setItem('dataList', JSON.stringify(this.state.data)); console.log('om main ', this.state.data) })

    }
    deleteEntryFromTodo = index => {
        const { data } = this.state;
        const filteredItems = data.filter(function(item) {
            return item.id !== index
          })

        this.setState({
            data: filteredItems
        }, () => { localStorage.setItem('dataList', JSON.stringify(filteredItems));console.log('on main delete ', this.state.data) })
    } 
    render() {
        const { data } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="todolist not-done">
                            <h1>Todos</h1>
                            <InputTodo id={data.length} addTotodoList={this.handleSubmit} />
                            <hr />  
                            <TodonotdoneList todoListData={data} editTodoList={this.editTodoList} deleteTodoList={this.deleteEntryFromTodo}  />
                            <div className="todo-footer">
                                <strong><span className="count-todos"> {data.filter((value) => {
                                    return !value.done;
                                }).length}</span></strong> Task left undone.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}