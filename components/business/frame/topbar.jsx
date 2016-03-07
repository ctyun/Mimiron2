import React from 'react';
import Dropdown from "../../basic/dropdown";
import Menu from "../../basic/menu";
import Icon from "../../basic/icon";
import Button from "../../basic/button";

const Topbar = React.createClass({
  getDefaultProps() {
      return{
        onLogout:()=>{},
        userName:"未登录用户",
        title:"电信云公司业务系统",
      }
  },
  render() {
    let userDropdown= (<Menu>
      <Menu.Item key="0">
        <a disabled>个人设置</a>
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
      </div>
    );
  }
});

export default Topbar;