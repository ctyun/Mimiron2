import React from 'react';
import Sidebar from '../frame/sidebar.jsx';
import Topbar from '../frame/topbar.jsx';
import Form from "../../basic/form";
const FormItem = Form.Item;
import Input from "../../basic/input";
import Icon from "../../basic/icon";
import Row from "../../basic/row";
import Col from "../../basic/col";
import Button from "../../basic/button";
import Anim from "../../basic/queue-anim";

const Login = React.createClass({
	getDefaultProps() {
		return{
			onSubmit: (()=>{}),
			title: "欢迎登陆",
		}
	},
	getInitialState() {
		return{
			formData: {},
			show:false
		}
	},
	componentDidMount: function(){
		this.setState({
			show:true
		});
	},
	setValue(func,name,e) {
		let formData = this.state.formData;
		let value = e.target? e.target.value: e; //Input 传入的是e, select传入的是value
		formData[name] = value;
		this.setState({formData:formData});
		if(func)
			func(value);
	},
	onSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.formData);
	},
	render() {
		let formEntity = [];
		let keycnt=0;
		if(this.props.children.length){  //好像children仅有一个的时候, 就不是list, 而直接是child这个element了
			for(let child of this.props.children){
				let childElement = React.cloneElement(child,
					{onChange: this.setValue.bind(null, child.props["onChange"],
						child.props["name"])});  //注意! 这里的label将被渲染为defaultText
				formEntity.push(
					<FormItem
							key= {"dummy-"+ keycnt++}
			        label={child.props["labelText"] || "请输入 : "}
			        labelCol={{ span: 10 }}
			        wrapperCol={{ span: 14 }}>
			        {childElement}
			    </FormItem>
				);
			}
		} else {
			let child = this.props.children;
			let childElement = React.cloneElement(child,
				{onChange: this.setValue.bind(null, child.props["onChange"],
					child.props["name"])});  //注意! 这里的label将被渲染为defaultText

			formEntity.push(
				<FormItem
						key= {"dummy-addon"}
		        label={child.props["labelText"] || "请输入 : "}
		        labelCol={{ span: 8 }}
		        wrapperCol={{ span: 8 }}>
		        {childElement}
		    </FormItem>
			);
		}
		
		return(
		<Form horizontal onSubmit={this.onSubmit} style={{}}>
			<Anim delay={900}>
				{this.state.show?[
				<div key="dummy-title" style={{margin:"20", fontSize:"20", textAlign:"center"}}>
					<p className="ant-form-text">{this.props.title}</p>
				</div>,
				<FormItem
					key="dummy-username"
					label="用户名："
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 8 }}>
				<Input  
					placeholder="请输入用户名" 
					addonAfter={<Icon type="user" />} 
					onChange={this.setValue.bind(this, null, "userLoginName")}/>
				</FormItem>,
				<FormItem
					key="dummy-password"
					label="密码："
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 8 }}>
				<Input type="password"
					placeholder="请输入密码" 
					addonAfter={<Icon type="lock" />} 
					onChange={this.setValue.bind(this, null, "userPassword")}/>
				</FormItem>,
				formEntity,
				<Row key="dummy-btn">
				<Col span="8" offset="8">
				  <Button type="primary" htmlType="submit">登陆</Button>
				</Col>
				</Row>
				]:null}
			</Anim>
		</Form>)
	}
})

export default Login;