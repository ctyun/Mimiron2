## 这是什么

Mimiron是一个基于react的组件库, 包含基本HTML组件和常用业务组件两部分, 也包括了react打包相关的工具链.

Mimiron2是[Mimiron](https://github.com/ctyun/Mimiron)的第二版本, 不向下兼容.

Mimiron2经过打包之后得到一个js文件, 一个css文件, 之间引入HTML页面即可, 在前端使用babel对JSX和ES6语法进行转义, 一般用于构建单页应用, 关于前端路由和权限控制请参考[demo项目](FIXME)

### 使用

1. 打包组件库 `npm run release`

1. 打包样式文件 `npm run creatcss`

1. 调试 `npm run debug`


### Tips

1. 在webpack中公用一个entry会导致无法暴露output.library中的元素.
1. 基于ant design V0.12.11-beta.
1. 支持React正常用法.
1. 前端使用babel.browser进行转义, 除了模块管理, 其他ES6语法全部可用.


### 基本元素的样式修改

1. btn: margin:0, 5px

### FIXME

1. 目前直接修改了Select和Table的源码(使用V0.12.x), 为了支持data(object)直接初始化, 其实应该在business中包装一层, 除非迫不得已, 应该保证ant design组件的完整性, 以此保证可升级. 此问题将在下次基础组件升级时被解决.

### 组件使用说明

基础组件全部使用ant design v0.12.x, 请参考[其文档](http://ant.design/docs/react/introduce), ant design基本组件引入方法为:
```
const Button = mimiron2.Button;
```
**下列组件使用方法有扩展:**

1.Select

示例:
```
const React = mimiron2.React;
const Menu = mimiron2.Menu;
const Icon = mimiron2.Icon;
const Table = mimiron2.Table;
class Show extends React.Component{
  render() {
    return (
      <Select name="input7" labelName="一种选择框：" data={{"1":"yi","2":"er"}} />
      <Select name="input7" labelName="一种选择框：" data={[{"text":"张三","value":"zhang3"}]} />
      );
  }
}
```

新增属性:

| 属性(prop) | 默认值 | 说明  |
| --- | --- | --- |
| data | [] | select的选项, 例如`[{"text":"张三","value":"zhang3"}]`, 可以传入disabled:1, 将其置位不可用. |

2.Table

示例:
```
const React = mimiron2.React;
const Select = mimiron2.Select;
class Show extends React.Component{
  doList(pageNo, pageSize) { //params用在查询时, 传入其他参数
    let params = this.locals.params;
    const menu = (
    <Menu>
      <Menu.Item key="0">
        <a onClick={()=>this.setState({modalVisibleShowContract:true})}>查看合同</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a onClick={()=>this.setState({modalVisibleShowHF:true})}>查看业务受理单</a>
      </Menu.Item>
    </Menu>
    );
    const operate = (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" href="#">
        操作 <Icon type="down" />
      </a>
    </Dropdown>
    );
    const data=[{
      "accountName":"测试客户",
      "loginEmail":"test@example.com",
      "status":"在网",
      "node":"北京节点1",
      "id":"1",
      "startDate":"2015-12-1",
      "endDate":"2017-12-1",
      "cpu":"2核",
      "ram":"4G",
      "rom":"1T",
      "ip":"20M(113.1.1.1)",
      "esb":"STAT:2T",
      "vpc":"#1",
      "lan":"192.168.13.x",
      "rawPrice":"1200",
      "realPrice":"800",
      "operate":operate,
    },{
      "accountName":"测试客户",
      "loginEmail":"test@example.com",
      "status":"在网",
      "node":"北京节点1",
      "id":"2",
      "startDate":"2015-12-1",
      "endDate":"2017-12-1",
      "esb":"STAT:10T",
      "rawPrice":"400",
      "realPrice":"200",
      "operate":operate,
    }];
    let table={
      data:data,
      totalRows:data.length,
      pageNo:params["pageNo"],
      pageSize:params["pageSize"],
    }
    this.setState({table:table});
  },
  render() {
    let tableProps={
      title:['客户名称','客户邮箱','资源状态','资源节点','开通日期','到期日期','主机核数','主机内存','磁盘','带宽(ip)','弹性块','VPC',"子网",'操作'],
      jsonKey:['accountName','loginEmail','status','node','startDate','endDate','cpu','ram','rom','ip','esb',"vpc","lan",'operate'],
      data:this.state.table.data,
      doList:this.doList,
      pageSize:this.state.table.pageSize,
      pageNo:this.state.table.pageNo,
      totalRows:this.state.table.totalRows,
      checkType:"none",
    };
    return (
      <Table {...tableProps} />
      );
  }
}
```

新增属性:

| 属性(prop) | 默认值 | 说明  |
| --- | --- | --- |
| title | [] | 表格头部字段显示内容 |
| jsonKey | [] | 表格头部字段在数据中对应的键 |
| data | null | 表格数据 |
| doList | (int pageNo, int pageSize)=>{} | 表格翻页或者设置页面大小时的回调函数 |
| pageSize | 0 | 表格每页展示记录数 |
| pageNo | 1 | 表格当前页数 |
| totalRows | 0 | 表格数据总数 |
| turnable | true | 表格显示下方的翻页器 |

**下列组件为新增组件:**

1.Page

说明:

这是一个通用的页面框架, 包括头部(Topbar)和侧边菜单(Sidebar).

示例:
```
const ReactDOM = mimiron2.ReactDOM;
const Page = mimiron2.Page;
const {React, Ajax} = mimiron2;

const Base = React.createClass({
    displayName: 'Base',
    getInitialState() {
        return {
            sidebarList:[{"children": [{"name": "\u793a\u4f8b", "btnRight": {}, "level": null, "url": "", "key": "e8f65eec69cf402aa3ee8828ed4c4dc3", "parentkey": "-1", "children": [{"name": "\u793a\u4f8b\u9875\u9762", "btnRight": {}, "level": null, "url": "/sample", "key": "099f747e454a417a92d76b62c022bb5d1", "parentkey": "e8f65eec69cf402aa3ee8828ed4c4dc31", "children": []}, {"name": "\u9996\u9875", "btnRight": {}, "level": null, "url": "/index", "key": "099f747e454a417a92d76b62c022bb55", "parentkey": "e8f65eec69cf402aa3ee8828ed4c4dc32", "children": []}]}, {"name": "VMS", "btnRight": {}, "level": null, "url": "", "key": "e8f65eec69cf402aa3ee8828ed4c4dc33", "parentkey": "-1", "children": [{"name": "\u6d41\u7a0b\u56fe\u7ba1\u7406", "btnRight": {}, "level": null, "url": "/uflow", "key": "099f747e454a417a92d76b62c022bb5d2", "parentkey": "e8f65eec69cf402aa3ee8828ed4c4dc34", "children": []}, {"name": "ip\u7ba1\u7406", "btnRight": {}, "level": null, "url": "/publicIp", "key": "099f747e454a417a92d76b62c022bb515", "parentkey": "e8f65eec69cf402aa3ee8828ed4c4dc35", "children": []}, {"name": "\u865a\u62df\u673a\u7ba1\u7406", "btnRight": {}, "level": null, "url": "/vm", "key": "099f747e454a417a92d76b62c022bb255", "parentkey": "e8f65eec69cf402aa3ee8828ed4c4dc36", "children": []}, {"name": "VPC\u7ba1\u7406", "btnRight": {}, "level": null, "url": "/vpc", "key": "099f747e454a417a92d76b62c0322bb55", "parentkey": "e8f65eec69cf402aa3ee8828ed4c4dc37", "children": []}, {"name": "\u78c1\u76d8\u7ba1\u7406", "btnRight": {}, "level": null, "url": "/volume", "key": "099f747e454a417a92d76b62c042bb558", "parentkey": "e8f65eec69cf402aa3ee8828ed4c4dc39", "children": []}]}, {"name": "\u5de5\u4f5c\u6d41", "btnRight": {}, "level": null, "url": "", "key": "e8f65eec69cf402aa3ee8828ed4c4dc311", "parentkey": "-1", "children": [{"name": "\u8282\u70b9\u9875\u9762\u751f\u6210[\u6d4b\u8bd5]", "btnRight": {}, "level": null, "url": "/flowTest", "key": "099f747e454a417a92d76b62c022bb5d3", "parentkey": "e8f65eec69cf402aa3ee8828ed4c4dc312", "children": []}]}, {"name": "\u6d4b\u8bd5\u9875\u9762", "key": "9405160662718118", "children": [{"url": "/menu", "name": "\u83dc\u5355\u7ba1\u7406", "key": "4278392400592565.5", "children": []}]}]}]
        }
    },
    render() {
        let userName = getUserName() || "NA";
        return(<div>
            <Page
                userName={userName}
                title="云公司客户经理门户"
                onLogout={this.logout}
                sidebarList={this.state.sidebarList}>
                <div id="page-wrapper">
                </div>
            </Page>
        </div>)
    }
});
```

属性说明:

| 属性(prop) | 默认值 | 说明  |
| --- | --- | --- |
| userName | "未登录用户" | Topbar右上角显示的用户名 |
| title | "电信云公司业务系统" | Top左上角的文字 |
| onLogout | ()=>{} | 注销时的回调方法 |
| list | [{}] | 侧边栏菜单数据 |

2.Command

说明:

这个组件的所有children将被靠左渲染, 一般是操作用的按钮.

示例:

```
const {React, ReactDOM} = mimiron2;
const Command = mimiron2.Command;
const Button = mimiron2.Button;
const CMmanage=React.createClass({
  render(){
    return (<div>
      <Command>
        <Button type="primary" onClick={()=>{this.setState({modalVisibleAdd:true})}}>添加</Button>
      </Command>
    </div>);
  }
})
```

属性说明:

| 属性(prop) | 默认值 | 说明  |
| --- | --- | --- |
| children | 无默认值, 此属性必须传入 | 子元素 |

3.Query  

说明:

一般用于放置查询条件

示例:

```
const {React, ReactDOM} = mimiron2;
const Query = mimiron2.Query;
const Input = mimiron2.Input;
const CMmanage=React.createClass({
  render(){
    return (<div>
      <Command>
      <Input name="query_userRealname" label="姓名 : " />
      <Input name="query_userLoginName" label="登录名 : " />
      <Input name="query_userEmail" label="邮箱 : "/>
      </Command>
    </div>);
  }
})
```

属性说明:

| 属性(prop) | 默认值 | 说明  |
| --- | --- | --- |
| children | 无默认值, 此属性必须传入 | 子元素 |
| formData | {} | 表单数据 |
| submitName | "查询" | 查询按钮显示的文字 |
| onSubmit | formData => {console.log(formData)}| 提交查询时的回调函数 |
| onReset |()=>{} | 清空按钮的回调函数 |

4.List

说明:

列表组件

示例:
```
const {React, ReactDOM} = mimiron2;
const List = mimiron2.List;
const Resource=React.createClass({
  render(){
    <List data={{
      "客户名称":"测试客户",
      "合同名称":"测试合同",
      "合同编码":"YJSAUTO201509300001",
      "合同生效日期":"2016-02-26 00:00:00",
      "合同状态":"已制定",
      "合同金额":"1000"
    }} />
  }
})
```

属性:
| 属性(prop) | 默认值 | 说明  |
| --- | --- | --- |
| data | null | 列表数据 |
