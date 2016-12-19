const ReactDOM = mimiron2.ReactDOM;
const React = mimiron2.React;

const Page = mimiron2.Page;
const Topbar = mimiron2.Topbar;
const Sidebar = mimiron2.Sidebar;

const DatePicker = mimiron2.DatePicker;
const Button = mimiron2.Button;
const Icon = mimiron2.Icon;
const Collapse = mimiron2.Collapse;
const Panel = Collapse.Panel;
const Checkbox = mimiron2.Checkbox
const CheckboxGroup = Checkbox.Group;
const Radio = mimiron2.Radio;
const RadioGroup = Radio.Group;
const TableRaw = mimiron2.TableRaw;
const Table = mimiron2.Table;
const Ajax = mimiron2.Ajax;

const Init = React.createClass({
    displayName: 'Init',
    local:{
        sidebarList:[{
            "id": "e8f65eec69cf402aa3ee8828ed4c4dc3",
            "name": "组件展示",
            "url": "",
            "parentId": "-1",
            "level": null,
            "children": [{
                "id": "099f747e454a417a92d76b62c022bb5d",
                "name": "基本组件展示",
                "url": "/basedemo",
                "parentId": "e8f65eec69cf402aa3ee8828ed4c4dc3",
                "level": null,
                "children": [],
                "btnRight": {}
            }, {
                "id": "099f747e454a417a92d76b62c022bb55",
                "name": "业务组件展示",
                "url": "/bssdemo",
                "parentId": "e8f65eec69cf402aa3ee8828ed4c4dc3",
                "level": null,
                "children": [],
                "btnRight": {}
            }],
            "btnRight": {}
        }, {
            "id": "e8f65eec69cf402aa3ee8828ed4c4dc3",
            "name": "其他菜单",
            "url": "",
            "parentId": "-1",
            "level": null,
            "children": [{
                "id": "099f747e454a417a92d76b62c022bb5d",
                "name": "点我没用",
                "url": "/dummy1",
                "parentId": "e8f65eec69cf402aa3ee8828ed4c4dc3",
                "level": null,
                "children": [],
                "btnRight": {}
            }, {
                "id": "099f747e454a417a92d76b62c022bb55",
                "name": "点我没用",
                "url": "/dummy2",
                "parentId": "e8f65eec69cf402aa3ee8828ed4c4dc3",
                "level": null,
                "children": [],
                "btnRight": {}
            }, {
                "id": "099f747e454a417a92d76b62c022bb55",
                "name": "点我没用",
                "url": "/dummy3",
                "parentId": "e8f65eec69cf402aa3ee8828ed4c4dc3",
                "level": null,
                "children": [],
                "btnRight": {}
            }],
            "btnRight": {}
        }]
    },
    render(){
        return(
            <Page sidebarList={this.local.sidebarList} title="mimiron2测试">
                <div id="page-wrapper"></div>
            </Page>
        );
    }
});
//注意, 这个组件可以被render到任意名称的DOM节点, 除了current-page

ReactDOM.render(<Init />, document.getElementById('main'));

