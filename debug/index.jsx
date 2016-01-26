const ReactDOM = mimiron2.ReactDOM;
const React = mimiron2.React;
const DatePicker = mimiron2.DatePicker;
const Button = mimiron2.Button;
const Collapse = mimiron2.Collapse;
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <div>
    <DatePicker />
    <Button type="primary">主按钮</Button>
    <h1>Hello, world!</h1>,
    <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  </div>,
  document.getElementById('main')
);

let a =1;
alert(a)
