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
				<div id="current-page" style={{"float":"left","width":"85%"}}>
					<div id="ajax-loading"></div>
					{this.props.children}
				</div>
			</div>
		</div>)
	}
})

export default Page;