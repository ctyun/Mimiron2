import React from 'react';

let NominalTable = React.createClass({
	render(){
		return(
			<div className="nominal-table">
				{this.props.children}
			</div>
		);
	}
});

export default NominalTable;