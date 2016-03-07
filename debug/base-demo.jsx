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

class Show extends React.Component{
  render() {
    return (<div className="row" style={{"padding":"10px"}}>
      <div className="col-4" style={{"textAlign":"right","padding":"5px"}}>
        <h3>{this.props.name}:</h3>
      </div>
      <div className="col-20">
        {this.props.children}
      </div>
    </div>);
  }
}
Show.defaultProps = {
  name :"未命名"
};



let Demo = React.createClass({
  locals:{
    params:{},
  },
  getInitialState: function () {
    return {
      radioValue: 'a',
      table:{
        pageSize:10,
        pageNo:1,
        totalRows:0,
        data: [],
      }
    };
  },
  componentDidMount: function(){
    console.log("did mount");
    this.doList(this.state.table.pageNo, this.state.table.pageSize);
  },
  checkboxChange: function(checkedValues) {
    console.log('checked = ', checkedValues);
  },
  radioChange:function(e){
    console.log('radio checked:' + e.target.value);
  },
  doList: function(pageNo, pageSize){ //params用在查询时, 传入其他参数
      var _this = this;
      var params = this.locals.params;
      params["pageNo"] = pageNo;
      params["pageSize"] = pageSize;
      Ajax.post("http://127.0.0.1:9002/api/queryHandingForm",params , function(r){
          var data = r.result;
          for(var i in data){
            data[i]["operate"] = (<span>
              <Button type="primary" onClick={alert.bind(null,"123")}>
                查看详情
              </Button>
            </span>);
          }
          _this.setState({
            table:{
              data:data,
              totalRows:r.totalCount,
              offset: pageNo,
              pageSize: pageSize
            }
          });
      });
  },
  render: function() {
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];

    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }];
    let tableProps={
      title:['受理单号','客户经理','客户名称','受理单类型','是否试用','状态','总金额','订购类型','订购周期','提交日期','资源开通日期'],
      jsonKey:['requestTicketsNo','CMname','accountName','useType','isTrial','status','totalPrice','cycleType','cycleCnt','requestDate','createDate'],
      data:this.state.table.data,
      doList:this.doList,
      pageSize:this.state.table.pageSize,
      pageNo:this.state.table.pageNo, //page:this.state.offset
      totalRows:this.state.table.totalRows,
      checkType:"none",
    };
    return (<div>
    <div className="row">
      <Show name="按钮">
        <Button type="primary">主按钮</Button>
        <Button type="primary" size="large">大号按钮</Button>
        <Button type="primary" disabled>主按钮(失效)</Button>
        <Button type="primary">
          前进
          <Icon type="right" />
        </Button>
      </Show>
      <Show name="图标">
        <Icon type="step-forward" />
        <Icon type="double-right" />
        <Icon type="plus" />
      </Show>
      <Show name="多选框">
        <CheckboxGroup options={['Apple', 'Pear', 'Orange']} defaultValue={['Apple']} onChange={this.checkboxChange} />
      </Show>
      <Show name="单选框">
        <RadioGroup onChange={this.radioChange} value={this.state.radioValue}>
          <Radio value="a">A</Radio>
          <Radio value="b">B</Radio>
          <Radio value="c">C</Radio>
          <Radio value="d">D</Radio>
        </RadioGroup>
      </Show>
      <Show name="日期选择">
        <DatePicker defaultValue="2015/01/01" format="yyyy/MM/dd" />
      </Show>
      <Show name="ant表格">
        <TableRaw dataSource={dataSource} columns={columns} />
      </Show>
      <Show name="表格">
        <Table {...tableProps} />
      </Show>
    </div>
    </div>);
  }
});

ReactDOM.render(<Demo />, document.getElementById('page-wrapper'));

