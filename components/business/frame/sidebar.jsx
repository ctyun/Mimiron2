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
  handleClick(e) {
    this.setState({
      current: e.key
    });
    Loader.loadUrl(e.key);
  },
  render() {
    let dummyKey=0;
    let createNode = node => {
      let toReturn = [];
      for(let item of node){ 
        let childCnt = 0;
        if(item.children instanceof Array){
          item.children.map(node=>node.module_type!==3?childCnt++:null);
        }
        if(!childCnt){
          toReturn.push(<Menu.Item key={item.url || (dummyKey++).toString()}>{item.name || ""}</Menu.Item>)
        }
        else{
          toReturn.push(<SubMenu key={item.url || (dummyKey++).toString()} title={<span><Icon type={item.icon||"appstore"} /><span>{item.name}</span></span>}>
              {createNode(item.children)}
            </SubMenu>
            )
        }
      }
      return toReturn;
    }
    let toRender = null;
    if(this.props.list && this.props.list.length>0)
      toRender = createNode(this.props.list);
    return (
      <Menu onClick={this.handleClick}
        style={{ "width": "15%", "top": 40, "bottom": 0, "position": "absolute", "overflowX": "hidden", "overflowY": "scroll"}}
        defaultOpenKeys={this.props.list.defaultOpenKeys}
        selectedKeys={[this.state.current]}
        mode="inline">
        <li></li>
        {toRender || <Menu.Item key="loading" disabled>loading</Menu.Item>}
        <li></li>
      </Menu>
    );
  }
});

export default Sidebar;