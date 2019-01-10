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
	},
	dataIndex: number
}

export default class ViewUserList extends React.Component<IProps, {}> {
	dragHandler(ev: any): any {
		// console.log("Drag");
	}

	onDragEndHandler(ev: any): any {
		// for (var i = 1; i <= this.props.users.length; i++) {
		// 	if (!document.getElementById('s' + i).hasChildNodes()) {
		// 		document.getElementById('s' + i).style.border = '1px gray solid';
		// 	}
		// }
	}

	dragStartHandler(ev: any): any {
		// for (var i = 1; i <= this.props.users.length; i++) {
		// 	var tempElement = document.getElementById('s' + i);
		// 	if (!tempElement.hasChildNodes()) {
		// 		tempElement.style.border = '2px blue dotted';
		// 	}
		// }
		// console.log('Drag Start',ev);
		
		ev.dataTransfer.setData('text', this.props.data.first_name +" "+ this.props.data.last_name);
	}
	render() {
		const { data, dataIndex} = this.props;
		return (
			<div
				id={dataIndex + ''}
				className="list-item"
				onDragEnd={(event) => this.onDragEndHandler(event)}
				onDrag={(event) => this.dragHandler(event)}
				onDragStart={(event) => this.dragStartHandler(event)}
				draggable={true}
			>
				{' '}
				{data.first_name} {data.last_name}
			</div>
		);
	}
}
