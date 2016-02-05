import React from 'react';
import TableRaw from '../basic/table';
import Pagination from '../basic/pagination';

function noop() {
}

let Table = React.createClass({
	getDefaultProps: function(){
		return{
			id:"table_default_id",
			title:[],
			jsonKey:[],
			data:null,
			doList:noop,
			pageSize:0,
			pageNo:1,
			totalRows:0,
			checkType:"none",
		}
	},
	getInitialState: function(){
		return{
			pageNo:this.props.pageNo,
			pageSize:this.props.pageSize,
			columns:[],
		}
	},
	componentDidMount: function(){
		if (this.props.title.length != this.props.jsonKey.length){
			console.info(`注意! ${this.props.id}的title和jsonKey数量对不上.`);
		}
		let columns = []
		for(let i=0; i<this.props.title.length; i++){
			columns.push({
				key: i,
				title:this.props.title[i],
				dataIndex:this.props.jsonKey[i]
			})
		}
		this.setState({columns:columns});
	},
	onChange: function(pageNo){
		this.props.doList(pageNo, this.state.pageSize);
		this.setState({pageNo:pageNo});
	},
	onShowSizeChange: function(pageNo, pageSize){
		this.props.doList(pageNo, pageSize);
		this.setState({
			pageNo:pageNo,
			pageSize:pageSize,
		});
	},
	render: function(){
		return(<div>
				<div className="row">
					<TableRaw 
						bordered 
						loading={this.state.isLoading}
						columns={this.state.columns} 
						dataSource={this.props.data} 
						pagination={false} />
				</div>
				<div className="row" style={{"marginTop":"5px"}}>
					<Pagination style={{"float":"right"}}
						showSizeChanger 
						showQuickJumper  
						onChange={this.onChange}
						onShowSizeChange={this.onShowSizeChange}
						defaultCurrent={this.state.pageNo} 
						total={this.props.totalRows} />
				</div>
			</div>)
	}
});

export default Table;