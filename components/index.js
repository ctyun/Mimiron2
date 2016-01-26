import React from 'react';
import ReactDOM from 'react-dom';

const Mimiron2 = {
  React: React,
  ReactDOM: ReactDOM,

  Affix: require('./affix'),
  DatePicker: require('./date-picker'),
  Tooltip: require('./tooltip'),
  Carousel: require('./carousel'),
  Tabs: require('./tabs'),
  Modal: require('./modal'),
  Dropdown: require('./dropdown'),
  Progress: require('./progress'),
  Popover: require('./popover'),
  Select: require('./select'),
  Breadcrumb: require('./breadcrumb'),
  Popconfirm: require('./popconfirm'),
  Pagination: require('./pagination'),
  Steps: require('./steps'),
  InputNumber: require('./input-number'),
  Switch: require('./switch'),
  Checkbox: require('./checkbox'),
  Table: require('./table'),
  Tag: require('./tag'),
  Collapse: require('./collapse'),
  message: require('./message'),
  Slider: require('./slider'),
  QueueAnim: require('./queue-anim'),
  Radio: require('./radio'),
  notification: require('./notification'),
  Alert: require('./alert'),
  Validation: require('./validation'),
  Tree: require('./tree'),
  Upload: require('./upload'),
  Badge: require('./badge'),
  Menu: require('./menu'),
  Timeline: require('./timeline'),
  Button: require('./button'),
  Icon: require('./icon'),
  Row: require('./row'),
  Col: require('./col'),
  Spin: require('./spin'),
  Form: require('./form'),
  Input: require('./input'),
  Calendar: require('./calendar'),
  TimePicker: require('./time-picker'),
  Transfer: require('./transfer'),
};

Mimiron2.version = require('../package.json').version;

const ReactVersion = React.version;

module.exports = Mimiron2;
