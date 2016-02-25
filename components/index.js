require('es5-shim'); //为了兼容IE8, 参考:https://github.com/xcatliu/react-ie8#cn-make-your-react-app-work-in-ie8  ->其他问题, 第2条
require('es5-shim/es5-sham');

const React=require('react');
const ReactDOM=require('react-dom');

const Mimiron2 = {
  React: React,
  ReactDOM: ReactDOM,
  //基本组件
  Affix: require('./basic/affix'),
  DatePicker: require('./basic/date-picker'),
  Tooltip: require('./basic/tooltip'),
  Carousel: require('./basic/carousel'),
  Tabs: require('./basic/tabs'),
  Modal: require('./basic/modal'),
  Dropdown: require('./basic/dropdown'),
  Progress: require('./basic/progress'),
  Popover: require('./basic/popover'),
  Select: require('./basic/select'),
  Breadcrumb: require('./basic/breadcrumb'),
  Popconfirm: require('./basic/popconfirm'),
  Pagination: require('./basic/pagination'),
  Steps: require('./basic/steps'),
  InputNumber: require('./basic/input-number'),
  Switch: require('./basic/switch'),
  Checkbox: require('./basic/checkbox'),
  TableRaw: require('./basic/table'),
  Tag: require('./basic/tag'),
  Collapse: require('./basic/collapse'),
  message: require('./basic/message'),
  Slider: require('./basic/slider'),
  QueueAnim: require('./basic/queue-anim'),
  Radio: require('./basic/radio'),
  notification: require('./basic/notification'),
  Alert: require('./basic/alert'),
  Validation: require('./basic/validation'),
  Tree: require('./basic/tree'),
  Upload: require('./basic/upload'),
  Badge: require('./basic/badge'),
  Menu: require('./basic/menu'),
  Timeline: require('./basic/timeline'),
  Button: require('./basic/button'),
  Icon: require('./basic/icon'),
  Row: require('./basic/row'),
  Col: require('./basic/col'),
  Spin: require('./basic/spin'),
  Form: require('./basic/form'),
  Input: require('./basic/input'),
  Calendar: require('./basic/calendar'),
  TimePicker: require('./basic/time-picker'),
  Transfer: require('./basic/transfer'),
  //业务组件
  Page: require("./business/frame/page"),
  Sidebar: require("./business/frame/sidebar"),
  Topbar: require("./business/frame/topbar"),
  Table: require("./business/table"),
  Query: require("./business/query"),
  Command: require("./business/command"),
  Login: require("./business/page/login"),
  List: require("./business/list"),
  //工具
  Ajax: require("./tools/ajax"),
  Loader: require("./tools/loader"),
  Misc: require("./tools/misc"),
};

Mimiron2.version = require('../package.json').version;

const ReactVersion = React.version;

module.exports = Mimiron2;
