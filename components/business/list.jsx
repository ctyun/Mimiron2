import React from 'react';
import Row from "../basic/row";
import Col from "../basic/col";

let List = React.createClass({
	getDefaultProps() {
		return{
			data:{"数据错误":"未传入data"}
		}
	},
	render() {
		let toReturn = [];
		let dummyKey = 0;
		for(let i in this.props.data){
			toReturn.push(
				<Row key={dummyKey++}>
			      <Col span="12" style={{textAlign:"right"}}>{i+":"} &nbsp;</Col>
			      <Col span="12" style={{textAlign:"left"}}>&nbsp;{this.props.data[i]}</Col>
			    </Row>
			);
		}
		return(
			<div style={{"marginBottom":10}}>{toReturn}</div>
			);
	}
});

export default List;