import React from 'react';
import Select from 'rc-select';
import classNames from 'classnames';

const Option = Select.Option;

const AntSelect = React.createClass({
  getDefaultProps() {
    return {
      prefixCls: 'ant-select',
      transitionName: 'slide-up',
      optionLabelProp: 'children',
      choiceTransitionName: 'zoom',
      showSearch: false,
      size: 'default'
    };
  },
  render() {
    let {
      size, className, combobox, notFoundContent
    } = this.props;

    const cls = classNames({
      'ant-select-lg': size === 'large',
      'ant-select-sm': size === 'small',
      [className]: !!className,
    });

    if (combobox) {
      notFoundContent = null;
    }

    let data=[];
    if (this.props.data){
      for(let i in this.props.data){
        if(typeof this.props.data[i].value != "undefined"){
          data.push(<Option value={this.props.data[i].value} disabled={this.props.data[i].disabled?true:false} {...this.props.data[i].extra}> {this.props.data[i].text} </Option>);
        } else{
          data.push(<Option value={i}>{this.props.data[i]}</Option>);
        }
      }
    }

    return (
      <Select {...this.props}
        children = {data.length==0?this.props.children:data}
        className={cls}
        notFoundContent={notFoundContent} />
    );
  }
});

AntSelect.Option = Select.Option;
AntSelect.OptGroup = Select.OptGroup;

export default AntSelect;