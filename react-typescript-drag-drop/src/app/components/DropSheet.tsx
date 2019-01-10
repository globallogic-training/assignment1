import * as React from 'react';

interface DProps {
	users: {
		id: number;
		first_name: string;
		last_name: string;
		gender: string;
	}[];
}
export default class DropSheet extends React.Component<DProps, {}> {
    
onDragEnter(ev: any): any {
	ev.target.style.background = 'green';
}

onDragLeave(ev: any): any {
	// console.log('on drag leave', ev.currentTarget.style.cssText.indexOf('gray'))
	ev.target.style.background = 'white';
}
onRemove(ev: any):any {
	
	ev.target.parentNode.parentNode.style.border = '1px solid gray';
	ev.target.parentNode.parentNode.style.background = 'white';

	ev.target.parentNode.parentNode.setAttribute('ondragexit', 'ondragexit_handler(event)');
	ev.target.parentNode.parentNode.setAttribute('ondragenter', 'ondargenter_handler(event)');
	ev.target.parentNode.parentNode.setAttribute('ondragleave', 'ondragleave_handler(event)');
	ev.target.parentNode.parentNode.setAttribute('ondrop', 'drop_handler(event);');
	ev.target.parentNode.parentNode.setAttribute('ondragover', 'dragover_handler(event)');

	var elements = document.getElementById('myList');
	ev.target.previousSibling.setAttribute('draggable', true);
	ev.target.previousSibling.style =
		"display: 'block', border-top-right-radius: '5px', border-bottom-right-radius: '5px', margin-bottom: '4px', cursor: '-webkit-grab'";
	
	elements.insertBefore(ev.target.previousSibling, elements.firstChild);
	ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
}
dropHandler(ev: any): any {
	let data = ev.dataTransfer.getData('text');
    ev.preventDefault();
    let elem = document.createElement('div');
    elem.innerText = data;
    ev.target.appendChild(elem);
}
dragOver(ev: any): any {
	// console.log("dragOver");
	ev.preventDefault();
}
	render() {
        let col1Element: any[]= [];
        let col2Element: any[]= [];
        let col3Element: any[]= [];
        this.props.users.map((item, index) => {
            let tempId ='s'+JSON.stringify(index+1);
            if ((index+1) % 3 == 1) {
                  
                    col1Element.push (<div id={tempId} className="dropable-element" onDragEnter={(event) => this.onDragEnter(event)} onDragLeave={(event) => this.onDragLeave(event)} onDrop={(event) => this.dropHandler(event)} onDragOver={(event) => this.dragOver(event)}></div>)
            }else if( (index+1) % 3 == 2 ){
                col2Element.push (<div id={tempId} className="dropable-element" onDragEnter={(event) => this.onDragEnter(event)} onDragLeave={(event) => this.onDragLeave(event)} onDrop={(event) => this.dropHandler(event)} onDragOver={(event) => this.dragOver(event)}></div>)
            }else{
                col3Element.push (<div id={tempId} className="dropable-element" onDragEnter={(event) => this.onDragEnter(event)} onDragLeave={(event) => this.onDragLeave(event)} onDrop={(event) => this.dropHandler(event)} onDragOver={(event) => this.dragOver(event)}></div>)
            }
        })
    
		return (
			<div className="list-sheet" id='dropSection'>
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
