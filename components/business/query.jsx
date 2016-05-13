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

let Query = React.createClass({
	getInitialState() {
		return{
			formData:this.props.formData
		}
	},
	getDefaultProps() {
		return{
			formData: {},
			submitName: "查询",
			onSubmit: formData => {console.log(formData)},
			onReset: ()=>{},
		}
	},
	componentWillMount(){
		this.handleClear() //立即重置表单, 获得表单默认值.
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
			if(child && (child.props["defaultValue"]!=undefined || child.props["value"]!=undefined)){
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
	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.formData);
	},
	handleClear (e){
		if(e) e.preventDefault();
		let formData={};
		let children = this.props.children;
		for(let i in children){
			if(children[i] && children[i].props){
				formData[children[i].props["name"]] = children[i].props["defaultValue"]?children[i].props["defaultValue"]:null;
			}
		}
		this.setState({formData:formData});
		this.props.onReset(e);
	},
	render() {
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
				formEntity.push(<Col span="8" key={i}>
								<FormItem
							        label={children[i].props["label"] || children[i].props["labelName"]}
							        labelCol={{ span: 10 }}
							        wrapperCol={{ span: 14 }}>
							        {child}
							    </FormItem>
							</Col>
				);
			}
		}
		return(<div>
				<p className="buttons" style={{textAlign:"right",padding:10}}>
		          <Button type="primary" onClick={()=>{this.setState({show:!this.state.show})}}>
					查询条件 {this.state.show?<Icon type="minus-circle-o"/>:<Icon type="plus-circle"/>}
				  </Button>
		        </p>
		        <QueueAnim delay={100} type={["top"]} style={{paddingRight:15}}>
		        	{this.state.show ? [
					<Form horizontal key="dummy">
					  <Row>
					    {formEntity}
					  </Row>
					  <Row>
					    <Col span="8" offset="16" style={{ textAlign: 'right' }}>
					    	<Button type="ghost" onClick={this.handleClear}>清除条件</Button>
					    	<Button type="primary" onClick={this.handleSubmit}>{this.props.submitName}</Button>
					    </Col>
					  </Row>
					</Form>
					]:null}
				</QueueAnim>
			</div>)
	}
});

//Query = createForm()(Query);

export default Query;

