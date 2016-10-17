import React from 'react';
import Table from "../business/table";
import Query from "../business/query";
import Input from "../basic/input";
import Command from "../business/command";
import Button from "../basic/button";
import Modal from "../basic/modal";
const confirm = Modal.confirm;
import Upload from "../basic/upload";
import message from "../basic/message";
import Icon from "../basic/icon";
import Select from "../business/select";
import Form from "../basic/form";
const FormItem = Form.Item;
import Menu from "../basic/menu";
import Dropdown from "../basic/dropdown";
import Row from "../basic/row";
import Col from "../basic/col";
import Ajax from "../tools/ajax";


let VoucherActivityChoices=React.createClass({
	getInitialState(){
        return{
            activityChoices:[], //代金券可用活动, 从后台读取
        }
    },
	componentWillMount(){
        Ajax.get("/voucher/getAcivityChoices", r=>{
            let now = new Date();
            now = now.getTime();
            let activityChoices = [];
            for(let node of r.returnObj.result){
                activityChoices.push(node.endTime>now?{
                    "text":node.promotionName,
                    "value":node.promotionId
                }:{
                    "text":node.promotionName,
                    "value":node.promotionId,
                    "disabled":true
                })
            }
            this.setState({activityChoices});
        });
    },
	render(){
		return(<Select data={this.state.activityChoices} style={{width:200}} {...this.props}/>);
	}
});

export default VoucherActivityChoices;