import React from 'react';
import SelectRaw from "../basic/select"
const Option = SelectRaw.Option;
const OptGroup = SelectRaw.OptGroup;

let Select = React.createClass({
	getInitialState: function(){
		return{
		}
	},
	render(){
		let data=[];
	    if (this.props.data){
	      for(let i in this.props.data){
	        if(typeof this.props.data[i].value != "undefined"){
	          data.push(<Option value={this.props.data[i].value} disabled={this.props.data[i].disabled?true:false} {...this.props.data[i].extra} key={this.props.data[i].value}> {this.props.data[i].text} </Option>);
	        } else{
	          data.push(<Option value={i} key={i}>{this.props.data[i]}</Option>);
	        }
	      }
	    }
		return(<SelectRaw {...this.props}>
			{data.length==0?this.props.children:data}
		</SelectRaw>);
	}
});

Select.Option = Option;
Select.OptGroup = OptGroup;

export default Select;