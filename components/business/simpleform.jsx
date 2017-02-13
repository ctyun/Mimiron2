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
import Misc from "../tools/misc";

const SimpleForm = React.createClass({
	getValue(){
		let formData = Object.assign({},this.state.formData);
		console.log(this.state.formData, formData);
		for(let i in formData){
			if(formData[i] instanceof Array){
				for(let j = 0; j<formData[i].length; j++){
					formData[i+"_"+j] = formData[i][j]
				}
				delete formData[i]
			}
		}	
		for(let i in formData){
			if(formData[i].getTime){
				formData[i] = Misc.date2str(formData[i],"yyyy-MM-dd HH:mm:ss");
			}
		}
		console.log(formData);
		return formData;
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
	componentWillMount(){  //Query可能也需要这个生命周期, 传入defaultValue还有点bug, 尚未修改.
		let formData = this.state.formData;
		let children;
		if(!this.props.children.length){
			children = [this.props.children];
		} else{
			children = this.props.children;
		}
		for(let i in children){
			if(children[i] && children[i].props){
				formData[children[i].props["name"]] = children[i].props["defaultValue"]!==undefined?children[i].props["defaultValue"]:null;
			}
		}
		this.setState({formData:formData});
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
			if(child && (child.props["defaultValue"] || child.props["value"]!=undefined)){ //注意, 这里defaultValue必须是有意义的值, 因为Input组件默认的DefaultValue是""
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
			if(children[i] && children[i].props){
				let childName = children[i].props["name"];
				let injectProps = {
					onChange: this.setValue.bind(null, children[i].props["onChange"],
						children[i].props["name"]),
					value:this.state.formData[childName],
				}
				if(this.props.disableAll){
					injectProps.disabled = true;
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