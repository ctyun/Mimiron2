import React from 'react';
import Dropdown from "../../basic/dropdown";
import Menu from "../../basic/menu";
import Icon from "../../basic/icon";

const Topbar = React.createClass({
  locals:{
    userDropdown : (
      <Menu>
        <Menu.Item key="0">
          <a target="_blank" href="http://www.alipay.com/">个人设置</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">注销</a>
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="3" disabled>会员功能</Menu.Item>
      </Menu>
    )
  },
  getDefaultProps() {
      return{
        logout:null,
        userName:"未登录用户",
        title:"电信云公司业务系统",
      }
  },
  getInitialState() {
    return {
      current: '1'
    };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  },
  render() {
    return (
      <div className="topbar">
        <div className="topbar-logo">
          <h3><a href="#">{this.props.title}</a></h3>
        </div>
        <div className="topbar-right">
          <Dropdown overlay={this.locals.userDropdown} style={{"float":"right"}}>
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