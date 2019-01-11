import * as React from 'react';

// export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
interface IProps {
	data: {
		id: number;
		first_name: string;
		last_name: string;
		gender: string;
	};
	users: {
		id: number;
		first_name: string;
		last_name: string;
		gender: string;
	}[];
	dataIndex: number;
	setDragObject: any;
}

export default class ViewUserList extends React.Component<IProps, {}> {

	onDragEndHandler = (ev: any): any => {
		this.props.users.map((item, index) => {
			let tempElement = document.getElementById(`s${index}`);
			if (!tempElement.hasChildNodes()) {
				tempElement.style.border = '1px gray solid';
			}
		});
	}

	dragStartHandler = (ev: any): any => {
		this.props.users.some((item, index): any => {
			let tempElement = document.getElementById(`s${index}`);
			if (!tempElement.hasChildNodes()) {
				tempElement.style.border = '2px blue dotted';
				return true;
			}
		});
		this.props.setDragObject(this.props.dataIndex, `${this.props.data.first_name}  ${this.props.data.last_name}`);
	}
	
	render() {
		const { data, dataIndex } = this.props;
		return (
			<div
				id={`${dataIndex}`}
				className="list-item"
				onDragEnd={this.onDragEndHandler}
				onDragStart={this.dragStartHandler}
				draggable={true}
			>
				{data.first_name} {data.last_name}
			</div>
		);
	}
}
