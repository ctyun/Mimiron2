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
			      <Col span="11" style={{textAlign:"right"}}>{i}</Col>
			      <Col span="2"> &nbsp;&nbsp; </Col>
			      <Col span="11" style={{textAlign:"left"}}>{this.props.data[i]}</Col>
			    </Row>
			);
		}
		return(
			<div>{toReturn}</div>
			);
	}
});

export default List;