import React from 'react';

class TodonotdoneList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isGoing: true
		};

		// this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(index) {
		console.log('in handle', index);
		// const target = event.target;
		// const value = target.type === 'checkbox' ? target.checked : target.value;
		// const name = target.name;
		this.props.editTodoList(index);
		// this.setState({
		//   [name]: value
		// });
	}
	render() {
		// console.log('in render', this.state)
		const { todoListData } = this.props;

		const rows = todoListData.map((row, index) => {
			if (!row.done)
				return (
					<li key={index} className="ui-state-default">
						<div className="checkbox">
							<label>
								<input
									type="checkbox"
									name={'checkbox' + index}
									onChange={() => this.handleInputChange(index)}
								/>
								{row.title}
							</label>
						</div>
                        <button type='button' onClick={() => {this.props.deleteTodoList(row.id)}} className="remove-item">
                            <i className="material-icons" >close</i>
						</button>
					</li>
				);
			else
				return (
					<li key={index} className='done-items'>

						<i className="material-icons" >done</i>{' '+row.title}{' '}
						<button type='button' onClick={() => {this.props.deleteTodoList(row.id)}} className="remove-item">
                            <i className="material-icons" >close</i>
						</button>
					</li>
				);
		});

		return (
			<ul id="sortable" className="list-unstyled">
				{rows}
			</ul>
		);
	}
}

export default TodonotdoneList;
