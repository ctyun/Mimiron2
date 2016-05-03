import React from 'react';
import AntDatePicker from "../basic/date-picker";

let DatePicker = React.createClass({
	onChange(value){
		let format = this.props.format || "yyyy/MM/dd"
		format = format.replace("yyyy", value.getFullYear());
		format = format.replace("MM", (value.getMonth()+1)<10?"0"+String(value.getMonth()+1):value.getMonth()+1);
		format = format.replace("dd", (value.getDate())<10?"0"+String(value.getDate()):value.getDate());
		this.props.onChange(format);
	},
	render(){
		return(<AntDatePicker {...this.props} onChange={this.onChange}>
		</AntDatePicker>);
	}
});

DatePicker.Calendar = AntDatePicker.Calendar;
DatePicker.RangePicker = AntDatePicker.RangePicker;
DatePicker.MonthPicker = AntDatePicker.MonthPicker;

export default DatePicker;