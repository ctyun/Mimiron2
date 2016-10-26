import React from 'react';
import Dropdown from "../../basic/dropdown";
import Menu from "../../basic/menu";
import Icon from "../../basic/icon";
import Button from "../../basic/button";
import Modal from "../../basic/modal";
import Select from "../../business/select";
import message from "../../basic/message";
import Row from "../../basic/row";
import Col from "../../basic/col";
import Input from "../../basic/input";

const Topbar = React.createClass({
  getDefaultProps() {
    return{
      onLogout:()=>{},
      userName:"未登录用户",
      title:"电信云公司业务系统",
      }
  },
  getInitialState(){
    return{
      modalVisibleSetting:false,
      modalVisibleChangeRole:false,
    }
  },
  handleChooseRole(){
    Ajax.get("/api/user/getUserDetail", r=>{
      this.setState({userRoles:r, modalVisibleChangeRole:true});
    });
  },
  setRole(){
    Ajax.post("/api/user/setRole", {selectedRole:this.state.selectedRole, selectedRoleName:this.state.userRoles[this.state.selectedRole]}, r=>{
      message.info(r.text);
      this.setState({modalVisibleChangeRole:false});
      window.location.reload(); //刷新页面, 加载新的菜单项.
    });
  },
  changeSetting(){
    if(!this.state.password&&!this.state.passwordRepeat){
      message.error("请输入新密码");
    } else if(this.state.passwordRepeat!==this.state.password){
      message.error("两次输入新密码不一致");
    } else {
      Ajax.post("/api/user/changePassword",{password:this.state.password},r=>{
        message.info(r.result);
        this.setState({modalVisibleSetting:false});
      });
    }
  },
  render() {
    let userDropdown= (<Menu>
      <Menu.Item key="2">
        <a onClick={()=>this.setState({modalVisibleSetting:true})}>设置</a>
      </Menu.Item>
      <Menu.Item key="0">
        <a onClick={this.handleChooseRole}>选择角色</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a onClick={this.props.onLogout}>注销</a>
      </Menu.Item>
      <Menu.Divider/>
      <Menu.Item key="3" disabled>会员功能</Menu.Item>
    </Menu>);
    return (
      <div className="topbar">
        <div className="topbar-logo">
          <h3><a href="#">{this.props.title}</a></h3>
        </div>
        <div className="topbar-right">
          <Dropdown overlay={userDropdown} style={{"float":"right"}}>
            <a className="ant-dropdown-link" href="#">
              {this.props.userName} <Icon type="down" />
            </a>
          </Dropdown>
        </div>
        <Modal title="选择角色" visible={this.state.modalVisibleChangeRole} footer={null} onCancel={()=>{this.setState({modalVisibleChangeRole:false})}}>
          <div style={{textAlign:"center"}}>
            <Select data={this.state.userRoles} noDummyOption={true} style={{width:200}} onChange={value=>{this.setState({selectedRole:value})}}/>
            <Button type="primary" onClick={this.setRole}> 确认 </Button>
          </div>
        </Modal>
        <Modal title="设置" visible={this.state.modalVisibleSetting} footer={null} onCancel={()=>{this.setState({modalVisibleSetting:false})}}>
          <div>
            <Row style={{textAlign:"center", marginBottom:20}}>
              <b>我们会尽快提供其他用户资料修改的功能.</b>
            </Row>
            <Row style={{marginBottom:10}}>
              <Col span="9" offset="" style={{textAlign:"right"}}>
                请输入新密码
              </Col>
              <Col span="8" offset="1">
                <Input type="password" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}} />
              </Col>
            </Row>
            <Row style={{marginBottom:10}}>
              <Col span="9" style={{textAlign:"right"}}>
                请重复新密码
              </Col>
              <Col span="8" offset="1">
                <Input type="password" value={this.state.passwordRepeat} onChange={(e)=>{this.setState({passwordRepeat:e.target.value})}} />
              </Col>
            </Row>
            <Row style={{textAlign:"center"}}>
              <Button type="primary" onClick={this.changeSetting}> 确认 </Button>
            </Row>
          </div>
        </Modal>
      </div>
    );
  }
});

export default Topbar;