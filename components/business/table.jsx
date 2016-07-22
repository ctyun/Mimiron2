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
			turnable:true,
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
		this.formatCol(this.props.title, this.props.jsonKey, this.props.data);
	},
	formatCol: function(title, jsonKey, data){
		if (title.length != jsonKey.length){
			console.info(`注意! ${this.props.id}的title和jsonKey数量对不上.`);
		}
		let columns = []
		for(let i=0; i<title.length; i++){
			columns.push({
				key: i,
				title:title[i],
				dataIndex:jsonKey[i]
			})
			if(this.props.filters&&this.props.filters[i]!=undefined){
				columns[i]["filters"] = this.props.filters[i];
			}
			if(this.props.onFilter&&this.props.onFilter[i]!=undefined){
				columns[i]["onFilter"] = this.props.onFilter[i];
			}
			if(this.props.sorter&&this.props.sorter[i]!=undefined){
				columns[i]["sorter"] = this.props.sorter[i];
			}
			if(this.props.filterMultiple&&this.props.filterMultiple[i]!=undefined){
				columns[i]["filterMultiple"] = this.props.filterMultiple[i];
			}
		}
		for(let i=0; i<data.length; i++){
			if(!data[i]["key"])
				data[i]["key"] = i.toString();
		}
		this.setState({columns:columns});
	},
	onChange: function(pageNo){
		this.props.doList(pageNo, this.state.pageSize);
		this.setState({pageNo:pageNo});
	},
	componentWillReceiveProps(nextProps){
		//如果传入了新的title或者jsonKey, 则重构columns
		if((this.props.title != nextProps.title) || (this.props.jsonKey != nextProps.jsonKey)){
			this.formatCol(nextProps.title, nextProps.jsonKey, nextProps.data);
		}
		if(this.props.pageNo != nextProps.pageNo){
			this.setState({pageNo:nextProps.pageNo});
		}
	},
	onShowSizeChange: function(pageNo, pageSize){
		this.props.doList(pageNo, pageSize);
		this.setState({
			pageNo:pageNo,
			pageSize:pageSize,
		});
	},
	render: function(){
		return(<div style={{padding:15}}>
				<div className="row">
					<TableRaw 
						bordered 
						rowSelection={this.props.rowSelection}
						loading={this.state.isLoading}
						columns={this.state.columns} 
						dataSource={this.props.data} 
						pagination={false} 
						size = {this.props.size}
						expandedRowRender = {this.props.expandedRowRender}
						onRowClick = {this.props.onRowClick}
						columnsPageRange = {this.props.columnsPageRange}
						columnsPageSize = {this.props.columnsPageSize}/>
				</div>
				{this.props.turnable?
				<div className="row" style={{"marginTop":"5px"}}>
					<Pagination style={{"float":"right"}}
						showSizeChanger 
						showQuickJumper  
						current= {this.state.pageNo}
						pageSize = {this.state.pageSize}
						onChange={this.onChange}
						onShowSizeChange={this.onShowSizeChange}
						defaultCurrent={this.state.pageNo} 
						total={this.props.totalRows} 
						pageSizeOptions={["10","20","50","100","500",this.props.totalRows.toString()]}/>
				</div>
				:null}
			</div>)
	}
});

export default Table;