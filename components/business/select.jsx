import React from 'react';
import SelectRaw from "../basic/select"
const Option = SelectRaw.Option;
const OptGroup = SelectRaw.OptGroup;
import classNames from 'classnames';

let Select = React.createClass({
	getDefaultProps(){
		return{
		}
	},
	getInitialState(){
		return{
		}
	},
	renderSelect(){
		let data=[];
		if(!this.props.noDummyOption){
			data.push(<Option value="" key="mimiron2_select_dummy_key">==请选择==</Option>);
		}
    if (this.props.data){
      for(let i in this.props.data){
        if(typeof this.props.data[i].value != "undefined"){
          data.push(<Option value={this.props.data[i].value} disabled={this.props.data[i].disabled?true:false} {...this.props.data[i].extra} key={this.props.data[i].value}> {this.props.data[i].text} </Option>);
        } else{
          data.push(<Option value={i} key={i}>{this.props.data[i]}</Option>);
        }
      }
    }
		return(<SelectRaw {...this.props} onChange={this.props.onChange}>
			{data.length==0?this.props.children:data}
		</SelectRaw>);
	},
	renderLabledSelect(children){
		const prefixCls= 'ant-input';
		const props = this.props;
		const wrapperClassName = `${prefixCls}-group`;
		const addonClassName = `${wrapperClassName}-addon`;
		const addonBefore = props.addonBefore ? (
      <span className={addonClassName}>
        {props.addonBefore}
      </span>
    ) : null;
		const className = classNames({
      [`${props.prefixCls}-wrapper`]: true,
      [wrapperClassName]: (addonBefore),
    });
    return (
      <span className={className}>
        {addonBefore}
        {children}
      </span>
    );
	},
	render(){
		return this.props.addonBefore?this.renderLabledSelect(this.renderSelect()):this.renderSelect();
	}
});

Select.Option = Option;
Select.OptGroup = OptGroup;

export default Select;