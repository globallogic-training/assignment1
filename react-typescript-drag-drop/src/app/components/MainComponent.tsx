import * as React from 'react';
import ViewUserList from './ViewUserList';
import DropSheet from './DropSheet';
import './main.css';

interface MainComState {
	users: {
		id: number;
		first_name: string;
		last_name: string;
		gender: string;
		state: boolean;
	}[];
	name: string;
	index: number;
}

export class MainComponent extends React.Component<{}, MainComState> {
	
	constructor(props: any) {
		super(props);
		this.state = {
			name: '',
			index: 0,
			users: [
				{
					id: 1,
					first_name: 'Dorelle',
					last_name: 'Gainfort',
					gender: 'Female',
					state: false
				},
				{
					id: 2,
					first_name: 'Clea',
					last_name: 'Cutforth',
					gender: 'Female',
					state: false
				},
				{
					id: 3,
					first_name: 'Bella',
					last_name: 'Bartoszek',
					gender: 'Female',
					state: false
				},
				{
					id: 4,
					first_name: 'Arturo',
					last_name: 'Barnett',
					gender: 'Male',
					state: false
				},
				{
					id: 5,
					first_name: 'Nananne',
					last_name: 'Adshad',
					gender: 'Female',
					state: false
				},
				{
					id: 6,
					first_name: 'Goran',
					last_name: 'Witherdon',
					gender: 'Male',
					state: false
				},
				{
					id: 7,
					first_name: 'Vito',
					last_name: 'Wipper',
					gender: 'Male',
					state: false
				},
				{
					id: 8,
					first_name: 'Christan',
					last_name: 'Road',
					gender: 'Female',
					state: false
				},
				{
					id: 9,
					first_name: 'Joshua',
					last_name: 'Tomkin',
					gender: 'Male',
					state: false
				},
				{
					id: 10,
					first_name: 'Ken',
					last_name: 'Crewther',
					gender: 'Male',
					state: false
				},
				{
					id: 11,
					first_name: 'Avril',
					last_name: 'Jamieson',
					gender: 'Female',
					state: false
				},
				{
					id: 12,
					first_name: 'Tiebout',
					last_name: 'Gellan',
					gender: 'Male',
					state: false
				},
				{
					id: 13,
					first_name: 'Ellis',
					last_name: 'Flippelli',
					gender: 'Male',
					state: false
				},
				{
					id: 14,
					first_name: 'Marinna',
					last_name: 'Tovey',
					gender: 'Female',
					state: false
				},
				{
					id: 15,
					first_name: 'Jana',
					last_name: 'Goodfellow',
					gender: 'Female',
					state: false
				},
				{
					id: 16,
					first_name: 'Adria',
					last_name: 'Macilhench',
					gender: 'Female',
					state: false
				},
				{
					id: 17,
					first_name: 'Suzann',
					last_name: 'Mounsey',
					gender: 'Female',
					state: false
				},
				{
					id: 18,
					first_name: 'Ernest',
					last_name: 'Lukas',
					gender: 'Male',
					state: false
				},
				{
					id: 19,
					first_name: 'Jordon',
					last_name: 'Curran',
					gender: 'Male',
					state: false
				},
				{
					id: 20,
					first_name: 'Velma',
					last_name: 'Cadman',
					gender: 'Female',
					state: false
				},
				{
					id: 21,
					first_name: 'Angelica',
					last_name: 'Hamerton',
					gender: 'Female',
					state: false
				},
				{
					id: 22,
					first_name: 'Berri',
					last_name: 'Edis',
					gender: 'Female',
					state: false
				},
				{
					id: 23,
					first_name: 'Chrisse',
					last_name: 'Kardos-Stowe',
					gender: 'Male',
					state: false
				},
				{
					id: 24,
					first_name: 'Hanson',
					last_name: 'Kissick',
					gender: 'Male',
					state: false
				},
				{
					id: 25,
					first_name: 'Cher',
					last_name: 'Breckenridge',
					gender: 'Female',
					state: false
				},
				{
					id: 26,
					first_name: 'Charo',
					last_name: 'Willatts',
					gender: 'Female',
					state: false
				},
				{
					id: 27,
					first_name: 'Rebbecca',
					last_name: 'Greenstreet',
					gender: 'Female',
					state: false
				},
				{
					id: 28,
					first_name: 'Hetti',
					last_name: 'Loyd',
					gender: 'Female',
					state: false
				},
				{
					id: 29,
					first_name: 'Karoly',
					last_name: 'Filyakov',
					gender: 'Male',
					state: false
				},
				{
					id: 30,
					first_name: 'Adara',
					last_name: 'Sudddard',
					gender: 'Female',
					state: false
				},
				{
					id: 31,
					first_name: 'Mile',
					last_name: 'MacCallister',
					gender: 'Male',
					state: false
				},
				{
					id: 32,
					first_name: 'Raynard',
					last_name: 'Whall',
					gender: 'Male',
					state: false
				},
				{
					id: 33,
					first_name: 'Nady',
					last_name: 'Hacking',
					gender: 'Female',
					state: false
				},
				{
					id: 34,
					first_name: 'Werner',
					last_name: 'Bleaden',
					gender: 'Male',
					state: false
				},
				{
					id: 35,
					first_name: 'Cicily',
					last_name: 'Bedham',
					gender: 'Female',
					state: false
				},
				{
					id: 36,
					first_name: 'Brandyn',
					last_name: 'Quince',
					gender: 'Male',
					state: false
				},
				{
					id: 37,
					first_name: 'Brady',
					last_name: 'Meneux',
					gender: 'Male',
					state: false
				},
				{
					id: 38,
					first_name: 'Sarette',
					last_name: 'Elsby',
					gender: 'Female',
					state: false
				},
				{
					id: 39,
					first_name: 'Sapphire',
					last_name: 'Mercy',
					gender: 'Female',
					state: false
				},
				{
					id: 40,
					first_name: 'Jereme',
					last_name: 'Hannah',
					gender: 'Male',
					state: false
				},
				{
					id: 41,
					first_name: 'Sada',
					last_name: 'Yabsley',
					gender: 'Female',
					state: false
				},
				{
					id: 42,
					first_name: 'Torr',
					last_name: 'Duplock',
					gender: 'Male',
					state: false
				},
				{
					id: 43,
					first_name: 'Alyson',
					last_name: 'Gebby',
					gender: 'Female',
					state: false
				},
				{
					id: 44,
					first_name: 'Matt',
					last_name: 'Danilyuk',
					gender: 'Male',
					state: false
				},
				{
					id: 45,
					first_name: 'Sianna',
					last_name: 'Dumbar',
					gender: 'Female',
					state: false
				},
				{
					id: 46,
					first_name: 'Caitlin',
					last_name: 'Vivyan',
					gender: 'Female',
					state: false
				},
				{
					id: 47,
					first_name: 'Natassia',
					last_name: 'Arias',
					gender: 'Female',
					state: false
				},
				{
					id: 48,
					first_name: 'Hieronymus',
					last_name: 'Showte',
					gender: 'Male',
					state: false
				},
				{
					id: 49,
					first_name: 'Dieter',
					last_name: 'Benadette',
					gender: 'Male',
					state: false
				},
				{
					id: 50,
					first_name: 'Bren',
					last_name: 'Blampy',
					gender: 'Female',
					state: false
				},
				{
					id: 51,
					first_name: 'Pryce',
					last_name: "O' Timony",
					gender: 'Male',
					state: false
				},
				{
					id: 52,
					first_name: 'Nicola',
					last_name: 'Torricella',
					gender: 'Male',
					state: false
				},
				{
					id: 53,
					first_name: 'Miriam',
					last_name: 'Turneaux',
					gender: 'Female',
					state: false
				},
				{
					id: 54,
					first_name: 'Clayborn',
					last_name: 'Compton',
					gender: 'Male',
					state: false
				},
				{
					id: 55,
					first_name: 'Darcie',
					last_name: 'Tixall',
					gender: 'Female',
					state: false
				},
				{
					id: 56,
					first_name: 'Kirsteni',
					last_name: 'Lammas',
					gender: 'Female',
					state: false
				},
				{
					id: 57,
					first_name: 'Evyn',
					last_name: 'Ronnay',
					gender: 'Male',
					state: false
				},
				{
					id: 58,
					first_name: 'Norrie',
					last_name: 'Saffon',
					gender: 'Female',
					state: false
				},
				{
					id: 59,
					first_name: 'Annissa',
					last_name: 'Brunner',
					gender: 'Female',
					state: false
				},
				{
					id: 60,
					first_name: 'Yankee',
					last_name: 'Cheeld',
					gender: 'Male',
					state: false
				},
				{
					id: 61,
					first_name: 'Norri',
					last_name: 'Kemmis',
					gender: 'Female',
					state: false
				},
				{
					id: 62,
					first_name: 'Shawna',
					last_name: 'Boow',
					gender: 'Female',
					state: false
				},
				{
					id: 63,
					first_name: 'Cassandra',
					last_name: 'Westhead',
					gender: 'Female',
					state: false
				},
				{
					id: 64,
					first_name: 'Shurwood',
					last_name: 'Pena',
					gender: 'Male',
					state: false
				},
				{
					id: 65,
					first_name: 'Bernice',
					last_name: 'Pickersail',
					gender: 'Female',
					state: false
				},
				{
					id: 66,
					first_name: 'Stanislas',
					last_name: 'Simcox',
					gender: 'Male',
					state: false
				},
				{
					id: 67,
					first_name: 'Kristian',
					last_name: 'Dillon',
					gender: 'Male',
					state: false
				},
				{
					id: 68,
					first_name: 'Elwood',
					last_name: 'Linklater',
					gender: 'Male',
					state: false
				},
				{
					id: 69,
					first_name: 'Clareta',
					last_name: 'Daish',
					gender: 'Female',
					state: false
				},
				{
					id: 70,
					first_name: 'Jared',
					last_name: 'Davenport',
					gender: 'Male',
					state: false
				},
				{
					id: 71,
					first_name: 'Franky',
					last_name: 'Cayle',
					gender: 'Male',
					state: false
				},
				{
					id: 72,
					first_name: 'Madalyn',
					last_name: 'Blankley',
					gender: 'Female',
					state: false
				},
				{
					id: 73,
					first_name: 'Ethelyn',
					last_name: 'Moreby',
					gender: 'Female',
					state: false
				},
				{
					id: 74,
					first_name: 'Lionel',
					last_name: 'Lippett',
					gender: 'Male',
					state: false
				},
				{
					id: 75,
					first_name: 'Franklyn',
					last_name: 'Qualtrough',
					gender: 'Male',
					state: false
				},
				{
					id: 76,
					first_name: 'Kinnie',
					last_name: 'Spellissy',
					gender: 'Male',
					state: false
				},
				{
					id: 77,
					first_name: 'Bili',
					last_name: 'Farnaby',
					gender: 'Female',
					state: false
				},
				{
					id: 78,
					first_name: 'Cathyleen',
					last_name: 'Kleimt',
					gender: 'Female',
					state: false
				},
				{
					id: 79,
					first_name: 'Mariellen',
					last_name: 'Kleimt',
					gender: 'Female',
					state: false
				},
				{
					id: 80,
					first_name: 'Faun',
					last_name: 'Theakston',
					gender: 'Female',
					state: false
				},
				{
					id: 81,
					first_name: 'Osbert',
					last_name: 'Helix',
					gender: 'Male',
					state: false
				},
				{
					id: 82,
					first_name: 'Kenyon',
					last_name: 'Stanyon',
					gender: 'Male',
					state: false
				},
				{
					id: 83,
					first_name: 'Libbi',
					last_name: 'Townshend',
					gender: 'Female',
					state: false
				},
				{
					id: 84,
					first_name: 'Dewey',
					last_name: 'Lesek',
					gender: 'Male',
					state: false
				},
				{
					id: 85,
					first_name: 'Salli',
					last_name: 'Postins',
					gender: 'Female',
					state: false
				},
				{
					id: 86,
					first_name: 'Arturo',
					last_name: 'Hanlon',
					gender: 'Male',
					state: false
				},
				{
					id: 87,
					first_name: 'Kareem',
					last_name: 'Shimoni',
					gender: 'Male',
					state: false
				},
				{
					id: 88,
					first_name: 'Felipe',
					last_name: 'Tabary',
					gender: 'Male',
					state: false
				},
				{
					id: 89,
					first_name: 'Charmine',
					last_name: 'Fricke',
					gender: 'Female',
					state: false
				},
				{
					id: 90,
					first_name: 'Ruth',
					last_name: 'Barlthrop',
					gender: 'Female',
					state: false
				},
				{
					id: 91,
					first_name: 'Carver',
					last_name: 'Scarse',
					gender: 'Male',
					state: false
				},
				{
					id: 92,
					first_name: 'Loren',
					last_name: 'Heigold',
					gender: 'Male',
					state: false
				},
				{
					id: 93,
					first_name: 'Arlen',
					last_name: 'Capelow',
					gender: 'Male',
					state: false
				},
				{
					id: 94,
					first_name: 'Vicky',
					last_name: 'McMenamie',
					gender: 'Female',
					state: false
				},
				{
					id: 95,
					first_name: 'Doris',
					last_name: 'Chawner',
					gender: 'Female',
					state: false
				},
				{
					id: 96,
					first_name: 'Demetrius',
					last_name: 'McKeady',
					gender: 'Male',
					state: false
				},
				{
					id: 97,
					first_name: 'Dermot',
					last_name: 'Dugmore',
					gender: 'Male',
					state: false
				},
				{
					id: 98,
					first_name: 'Creigh',
					last_name: 'Aslie',
					gender: 'Male',
					state: false
				},
				{
					id: 99,
					first_name: 'Udall',
					last_name: 'Steeden',
					gender: 'Male',
					state: false
				},
				{
					id: 100,
					first_name: 'Britt',
					last_name: 'Biles',
					gender: 'Male',
					state: false
				}
			]
		};
	}

	setDragObject = (index: number, name: string) => {
		this.setState({
			index: index,
			name: name
		});
	};

	setListItemStatus = (id: number, forRemove: boolean) => {
		let object = this.state.users;
		object[id - 1] = { ...object[id - 1], state: !forRemove };
		this.setState({
			users: object
		});
	};

	getListView = () => {
		return this.state.users.map((item, index) => {
			if (!item.state)
				return (
					<ViewUserList
					  key={index}
						users={this.state.users}
						data={item}
						dataIndex={item.id}
						setDragObject={this.setDragObject}
					/>
				);
			else return null;
		});
	}

	render() {
		return (
			<div className="main-container">
				<div className="header-section">Drag & Drop Assignment</div>
				<div className="body-section">
					<div className="list-section" id="myList">
						{this.getListView()}
					</div>
					<DropSheet
						users={this.state.users}
						name={this.state.name}
						objectIndex={this.state.index}
						setListItemStatus={this.setListItemStatus}
					/>
				</div>
			</div>
		);
	}
}
