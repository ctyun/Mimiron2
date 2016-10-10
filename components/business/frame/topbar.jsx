import React from 'react';
import Dropdown from "../../basic/dropdown";
import Menu from "../../basic/menu";
import Icon from "../../basic/icon";
import Button from "../../basic/button";
import Modal from "../../basic/modal";
import Select from "../../business/select";
import message from "../../basic/message";

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
      modalVisible:false,
    }
  },
  handleChooseRole(){
    Ajax.get("/api/user/getUserDetail", r=>{
      this.setState({userRoles:r, modalVisible:true});
    });
  },
  setRole(){
    Ajax.post("/api/user/setRole", {selectedRole:this.state.selectedRole, selectedRoleName:this.state.userRoles[this.state.selectedRole]}, r=>{
      message.info(r.text);
      this.setState({modalVisible:false});
      window.location.reload(); //刷新页面, 加载新的菜单项.
    });
  },
  render() {
    let userDropdown= (<Menu>
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
        <Modal title="选择角色" visible={this.state.modalVisible} footer={null} onCancel={()=>{this.setState({modalVisible:false})}}>
          <div style={{textAlign:"center"}}>
            <Select data={this.state.userRoles} noDummyOption={true} style={{width:200}} onChange={value=>{this.setState({selectedRole:value})}}/>
            <Button type="primary" onClick={this.setRole}> 确认 </Button>
          </div>
        </Modal>
      </div>
    );
  }
});

export default Topbar;