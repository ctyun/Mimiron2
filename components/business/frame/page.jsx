import React from 'react';
import Sidebar from './sidebar.jsx';
import Topbar from './topbar.jsx';

const Page = React.createClass({
	render() {
		return(
		<div>
			<Topbar userName={this.props.userName}/>
			<div id="wrapper">
				<Sidebar />
				<div id="page-main" style={{"float":"left","width":"85%"}}>
					{this.props.children}
				</div>
			</div>
		</div>)
	}
})

export default Page;