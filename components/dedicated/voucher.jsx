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


let Voucher=React.createClass({
    styles:{
        row: {marginTop:20},
        label: {textAlign:"right"}
    },
    getInitialState(){
        return{
            activity:null,
            voucherTable:this.props.value?this.props.value[this.props.name]:[]
        }
    },
    getData(){
        return this.state;
    },
    render(){
        let voucherTableProps = {
            title: ['注册邮箱', '手机号', '代金券金额', '有效期'],
            jsonKey: ['email', 'phone', 'amount', 'endDate'],
            data: this.state.voucherTable,
            turnable: false
        };
        let _this = this;
        const uploadProps = {
            name: 'file',
            action: '/voucher/uploadVoucher',
            onChange(resp){
                const file = resp.file;
                if(file.status === "done"){
                    _this.setState({voucherTable:file.response.table});
                    if(_this.props.onChange){
                        _this.props.onChange({[_this.props.name]:file.response.table});
                    }
                }
            },
            disabled:this.props.disabled,  //not worked!
        };
        return (
            <div>
                {this.props.disabled?null:(
                    <Upload {...uploadProps} >
                        <Button type="primary">
                            <Icon type="upload"/> 添加文件
                        </Button>
                    </Upload> 
                )}
                <Table {...voucherTableProps} />
            </div>
        );
    }
});

export default Voucher;