import React from 'react';
import Sidebar from './sidebar.jsx';
import Topbar from './topbar.jsx';

const Page = React.createClass({
	render() {
		return(
		<div>
			<Topbar userName={this.props.userName} title={this.props.title} onLogout={this.props.onLogout}/>
			<div id="wrapper">
				<Sidebar list={this.props.sidebarList}/>
				<div id="current-page" style={{"float":"left","width":"85%"}}>
					<div id="ajax-loading"></div>
					{this.props.children}
				</div>
			</div>
		</div>)
	}
})

export default Page;