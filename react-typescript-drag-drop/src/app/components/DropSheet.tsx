import * as React from 'react';

interface DropSheetProps {
	users: {
		id: number;
		first_name: string;
		last_name: string;
		gender: string;
	}[];
	objectIndex: number;
	name: string;
	setListItemStatus: any;
}

interface DropSheetStates {
	dropId: {
		id: string;
		name: string;
		idList: number;
	}[];
}

export default class DropSheet extends React.Component<DropSheetProps, DropSheetStates> {
	constructor(props: any) {
		super(props);
		this.state = {
			dropId: []
		};
	}

	onDragLeave = (ev: any): any => {
		ev.target.style.background = 'white';
	};

	onRemove = (ev: any, id: any): any => {
		console.log('if', ev, id);
		
		ev.target.parentNode.style.background = 'white';
		this.setState({
			dropId: this.state.dropId.filter((item) => {
				if (id !== item.id) {
					return true;
				} else {
					this.props.setListItemStatus(item.idList, true);
					return false;
				}
			})
		});
	};

	dropHandler = (ev: any): any => {
	
		ev.target.style.background = 'burlywood';
		this.setState({
			dropId: [
				...this.state.dropId,
				{ id: ev.target.id, name: this.props.name, idList: this.props.objectIndex }
			]
		});
		this.props.setListItemStatus(this.props.objectIndex, false);
		this.props.users.some((item, index): any => {

			let tempElement = document.getElementById(`s${index}`);
			
			if (!tempElement.hasChildNodes()) {
				tempElement.style.border = '1px gray solid';
				return true;
			}
		});
	};

	dragOver = (ev: any): any => {
		ev.target.style.background = 'green';
		ev.preventDefault();
	};
	
	render() {
		let col1Element: any[] = [];
		let col2Element: any[] = [];
		let col3Element: any[] = [];
		let tempElement: any;
		this.props.users.map((item, index) => {
			if (this.state.dropId.length === 0) {
				tempElement = (
					<div key={index}
						id={`s${index}`}
						className="dropable-element"
						onDragLeave={this.onDragLeave}
						onDrop={this.dropHandler}
						onDragOver={this.dragOver}
					/>
				);
			} else {
				for (let i = 0; i < this.state.dropId.length; i++) {
					if (this.state.dropId[i].id === `s${index}`) {
						tempElement = (
							<div key={index} id={`s${index}`} className="dropable-element">
								<div className="inner-sheet-content">{this.state.dropId[i].name} </div>
								<button onClick={() => this.onRemove(event, this.state.dropId[i].id)}> x </button>
							</div>
						);
						break;
					} else {
						tempElement = (
							<div key={index}
								id={`s${index}`}
								className="dropable-element"
								onDragLeave={this.onDragLeave}
								onDrop={this.dropHandler}
								onDragOver={this.dragOver}
							/>
						);
					}
				}
			}

			if ((index + 1) % 3 == 1) {
				col1Element.push(tempElement);
			} else if ((index + 1) % 3 == 2) {
				col2Element.push(tempElement);
			} else {
				col3Element.push(tempElement);
			}
		});

		return (
			<div className="list-sheet" id="dropSection">
				<div className="dropable-element-col" id="col1">
					{col1Element}
				</div>
				<div className="dropable-element-col" id="col2">
					{col2Element}
				</div>
				<div className="dropable-element-col" id="col3">
					{col3Element}
				</div>
			</div>
		);
	}
}
