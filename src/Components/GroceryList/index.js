import React from 'react';

// function GroceryList() {
// 	return (
// 		<div className="grocery-list">
// 			<h1>Grocery List</h1>
// 			<div className="container">
// 				<ul>
// 					<li>Apples</li>
// 					<li>Oranges</li>
// 					<li>Bananas</li>
// 					<li>Rice</li>
// 					<li>Vegetables</li>
// 				</ul>
// 			</div>
// 		</div>
// 	);
// }

class GroceryList extends React.Component {
	render() {
		return (
			<div className="grocery-list">
				<h1>Grocery List</h1>
				<div className="container">
					<ul>
						<li>Apples</li>
						<li>Oranges</li>
						<li>Bananas</li>
						<li>Rice</li>
						<li>Vegetables</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default GroceryList;
