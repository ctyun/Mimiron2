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
const Input = mimiron2.Input;
const InputGroup = Input.Group;
const Select = mimiron2.Select;
const Cascader = mimiron2.Cascader;
const Misc = mimiron2.Misc;
const SimpleForm = mimiron2.SimpleForm;

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
      },
      testdefaultvalue: "1",
      inputnum:1,
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
  render() {
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
    const sel = <Select defaultValue="大于" style={{ width: 70 }} data={{"gt":"大于","st":"小于"}} />;
    const options = [{
      value: 'zhejiang',
      label: '浙江',
      children: [{
        value: 'hangzhou',
        label: '杭州',
        children: [{
          value: 'xihu',
          label: '西湖',
        }],
      }],
    }, {
      value: 'jiangsu',
      label: '江苏',
      children: [{
        value: 'nanjing',
        label: '南京',
        children: [{
          value: 'zhonghuamen',
          label: '中华门',
        }],
      }],
    }];
    let inputList =[], cnt=0;
    while(++cnt < this.state.inputnum) inputList.push(<Input key={cnt} name={`inputList${cnt}`} style={{width:100}} />);
    const columns1 = [
      { title: '姓名', dataIndex: 'name', key: 'name' },
      { title: '年龄', dataIndex: 'age', key: 'age' },
      { title: '列1', dataIndex: 'age', key: '1' },
      { title: '列2', dataIndex: 'age', key: '2' },
      { title: '列3', dataIndex: 'age', key: '3' },
      { title: '列4', dataIndex: 'age', key: '4' },
      { title: '列5', dataIndex: 'age', key: '5' },
      { title: '列6', dataIndex: 'age', key: '6' },
      { title: '列7', dataIndex: 'age', key: '7' },
      { title: '列8', dataIndex: 'age', key: '8' },
      {
        title: '操作',
        key: 'operation',
        render() {
          return <a href="#">操作</a>;
        }
      },
    ];
    const data1 = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
    }];
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
      <Show name="带条件输入">
        <Input id="site4" placeholder="金额" size="large" addonBefore={sel} style={{"width":200}}/>
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
        <DatePicker defaultValue="2015/01/01" format="yyyy/MM/dd" onChange={value=>{console.log(value); window.testdate = value;}}/>
      </Show>
      <Show name="ant表格">
        <TableRaw dataSource={dataSource} columns={columns} />
      </Show>
      <Show name="表格">
        <Table {...tableProps} />
      </Show>
      <Show name="级联选择">
        <Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={options} />
      </Show>
      <Show name="原生Select">
        <select name="raw_select" onChange={(a,b,c)=>{console.log(a,b,c)}}>
          <option value ="volvo">Volvo</option>
          <option value ="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <Select defaultValue="大于" style={{ width: 70 }} data={{"gt":"大于","st":"小于"}} onChange={(a,b,c)=>{console.log(a,b,c)}} />;
      </Show>
      <Show name="简易表单">
        <SimpleForm ref="simpleform" itemSpan={12}>
          <Input name="test-input" labelName="输入1"/>
          <Select name="test-Select" labelName="输入2" data={{"1":"一","2":"二"}} />
        </SimpleForm>
        <Button onClick={()=>{console.log(this.refs.simpleform.getValue());}}>Test</Button>
      </Show>
      <Show name="defaultValue测试">
        <Input defaultValue={this.state.testdefaultvalue} style={{width:100}}/>
        <Button onClick={()=>{this.setState({testdefaultvalue:this.state.testdefaultvalue+1})}}>Test</Button>
      </Show>
      <Show name="动态增减input">
        <SimpleForm ref="simpleform1" itemSpan={24}>
          {inputList}
        </SimpleForm>
        <Button onClick={()=>{this.setState({inputnum:this.state.inputnum+1})}}>加一个</Button>
        <Button onClick={()=>{
          let input = [];
          for(let key in this.refs.simpleform1.getValue())
            if(key.search("inputList")>-1) input.push(this.refs.simpleform1.getValue()[key])
          console.log(input);
        }} type="primary">取值</Button>
      </Show>
      <Show name="表格列翻页">
        <TableRaw columns={columns1} dataSource={data1} columnsPageRange={[2, 9]} columnsPageSize={4} />;
      </Show>
    </div>
    </div>);
  }
});

ReactDOM.render(<Demo />, document.getElementById('page-wrapper'));

