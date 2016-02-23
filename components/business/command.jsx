import React from 'react';


let Command = React.createClass({
	render() {
		return(
			<p className="buttons" style={{textAlign:"left",padding:10,position:"absolute"}}>
				{this.props.children}
			</p>
			);
	}
});

export default Command;