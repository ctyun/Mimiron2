import React from 'react';
import Row from '../basic/row';
import Col from '../basic/col';
import Form from "../basic/form";
const FormItem = Form.Item;
const createForm = Form.create;
import Input from "../basic/input";
import Button from "../basic/button";
import QueueAnim from "../basic/queue-anim";
import Icon from "../basic/icon";

const SimpleForm = React.createClass({
	getValue(){
		return this.state.formData;
	},
	getInitialState() {
		return{
			formData:this.props.formData
		}
	},
	getDefaultProps() {
		return{
			formData: {},
			itemSpan:24,
			labelSpan:8,
			wrapperSpan:16,
		}
	},
	componentWillReceiveProps(nextProps) {
		let formData = this.state.formData;
		let children;
		if(!nextProps.children.length){
			children = [nextProps.children];
		} else{
			children = nextProps.children;
		}
		for(let child of children){
			if(child && (child.props["defaultValue"] || child.props["value"])){
				if(child.props["defaultValue"]?(child.props["value"] && child.props["value"] != formData[child.props["name"]] && child.props["value"] != child.props["defaultValue"]): child.props["value"] != formData[child.props["name"]]){
					formData[child.props["name"]] = child.props["value"];
				}
			}
		}
		this.setState({formData:formData});
	},
	setValue(func,name,e) {
		let formData = this.state.formData;
		let value = e.target? e.target.value: e; //Input 传入的是e, select传入的是value
		formData[name] = value;
		this.setState({formData:formData});
		if(func)
			func(e);
	},
	render(){
		let formData = this.state.formData;
		let formEntity = [];
		let children;
		if(!this.props.children.length){
			children = [this.props.children];
		} else{
			children = this.props.children;
		}
		for(let i in children){ //遍历组件, 在这里将所有children变成受控组件.
			if(children[i]){
				let childName = children[i].props["name"];
				let injectProps = {
					onChange: this.setValue.bind(null, children[i].props["onChange"],
						children[i].props["name"]),
					value:this.state.formData[childName],
				}
				let child = React.cloneElement(children[i],injectProps);
				formEntity.push(<Col span={this.props.itemSpan.toString()} key={i}>
								<FormItem
							        label={children[i].props["label"] || children[i].props["labelName"]}
							        labelCol={{ span: this.props.labelSpan }}
							        wrapperCol={{ span: this.props.wrapperSpan }}>
							        {child}
							    </FormItem>
							</Col>
				);
			}
		}
		return(<div>
			<Form horizontal key="dummy">
			  <Row>
			    {formEntity}
			  </Row>
			</Form>
		</div>)
	}
});

export default SimpleForm