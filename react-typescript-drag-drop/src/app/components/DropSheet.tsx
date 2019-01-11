import * as React from 'react';

interface DProps {
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
interface DStates {
	dropId: {
		id: string;
		name: string;
		idList: number;
	}[];
}
export default class DropSheet extends React.Component<DProps, DStates> {
	constructor(props: any) {
		super(props);
		this.state = {
			dropId: []
		};
	}
	onDragEnter = (ev: any): any => {
		ev.target.style.background = 'green';
	};

	onDragLeave = (ev: any): any => {
		ev.target.style.background = 'white';
	};
	onRemove = (ev: any, id: any): any => {
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
		// console.log('drop Handler',ev.target.id)
		ev.preventDefault();
		ev.target.style.background = 'burlywood';
		this.setState({
			dropId: [
				...this.state.dropId,
				{ id: ev.target.id, name: this.props.name, idList: this.props.objectIndex }
			]
		});
		this.props.setListItemStatus(this.props.objectIndex, false);
	};
	dragOver = (ev: any): any => {
		// console.log("dragOver");
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
					<div
						id={'s' + index}
						className="dropable-element"
						onDragEnter={(event) => this.onDragEnter(event)}
						onDragLeave={(event) => this.onDragLeave(event)}
						onDrop={(event) => this.dropHandler(event)}
						onDragOver={(event) => this.dragOver(event)}
					/>
				);
			} else {
				for (let i = 0; i < this.state.dropId.length; i++) {
					if (this.state.dropId[i].id === 's' + index) {
						tempElement = (
							<div id={'s' + index} className="dropable-element">
								<div className="inner-sheet-content">{this.state.dropId[i].name} </div>
								<button onClick={() => this.onRemove(event, this.state.dropId[i].id)}> x </button>
							</div>
						);
						break;
					} else {
						tempElement = (
							<div
								id={'s' + index}
								className="dropable-element"
								onDragEnter={(event) => this.onDragEnter(event)}
								onDragLeave={(event) => this.onDragLeave(event)}
								onDrop={(event) => this.dropHandler(event)}
								onDragOver={(event) => this.dragOver(event)}
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
