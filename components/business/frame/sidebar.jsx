import React from 'react';
import Menu from "../../basic/menu";
import Icon from "../../basic/icon";
import Loader from "../../tools/loader"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Sidebar = React.createClass({
  getDefaultProps(){
    return {
      init:"index",
      list:[{}],
    }
  },
  getInitialState() {
    return {
      current: this.props.init,
      toRender:null,
    };
  }, 
  componentWillMount() {
    let dummyKey=0;
    let createNode = function(node){
      let toReturn = [];
      for(let item of node){ 
        if(typeof(item.children) == "undefined" || item.children.length==0){
          toReturn.push(<Menu.Item key={item.url || dummyKey++}>{item.name || ""}</Menu.Item>)
        }
        else{
          toReturn.push(<SubMenu key={item.url || dummyKey++} title={<span><Icon type={item.icon||"appstore"} /><span>{item.name}</span></span>}>
              {createNode(item.children)}
            </SubMenu>
            )
        }
      }
      return toReturn
    }
    this.setState({toRender:createNode(this.props.list)});
  },
  handleClick(e) {
    Loader.loadUrl(e.key);
    this.setState({
      current: e.key
    });
  },
  render() {
    return (
      <Menu onClick={this.handleClick}
        style={{ "width": "15%", "float":"left","minHeight":"600px" }}
        defaultOpenKeys={this.props.list.defaultOpenKeys}
        selectedKeys={[this.state.current]}
        mode="inline">
        {this.state.toRender}
        <li></li>
      </Menu>
    );
  }
});

export default Sidebar;


      // <Menu onClick={this.handleClick}
      //   style={{ "width": "15%", "float":"left","minHeight":"600px" }}
      //   defaultOpenKeys={['sub1']}
      //   selectedKeys={[this.state.current]}
      //   mode="inline">
      //   <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
      //     <MenuItemGroup title="分组1">
      //       <Menu.Item key="/basedemo">基本组件演示</Menu.Item>
      //       <Menu.Item key="/businessdemo">业务组件演示</Menu.Item>
      //     </MenuItemGroup>
      //     <MenuItemGroup title="分组2">
      //       <Menu.Item key="3">选项3</Menu.Item>
      //       <Menu.Item key="4">选项4</Menu.Item>
      //     </MenuItemGroup>
      //   </SubMenu>
      //   <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
      //     <Menu.Item key="5">选项5</Menu.Item>
      //     <Menu.Item key="6">选项6</Menu.Item>
      //     <SubMenu key="sub3" title="三级导航">
      //       <Menu.Item key="7">选项7</Menu.Item>
      //       <Menu.Item key="8">选项8</Menu.Item>
      //     </SubMenu>
      //   </SubMenu>
      //   <SubMenu key="sub4" title={<span><Icon type="setting" /><span>导航三</span></span>}>
      //     <Menu.Item key="9">选项9</Menu.Item>
      //     <Menu.Item key="10">选项10</Menu.Item>
      //     <Menu.Item key="11">选项11</Menu.Item>
      //     <Menu.Item key="12">选项12</Menu.Item>
      //   </SubMenu>
      //   <li></li>
      // </Menu>