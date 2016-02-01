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
  getInitialState: function () {
    return {
      radioValue: 'a'
    };
  },
  checkboxChange: function(checkedValues) {
    console.log('checked = ', checkedValues);
  },
  radioChange:function(e){
    console.log('radio checked:' + e.target.value);
  },
  render: function() {
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
    </div>
    </div>);
  }
});

let thisPage = React.createClass({
  render: function() {
    return(
      <Page>
        <Demo />
      </Page>);
  }
});

ReactDOM.render(
  <Page>
    <Demo />
  </Page>,
  document.getElementById('main')
);

