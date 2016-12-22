import React from 'react';
import Sidebar from './sidebar.jsx';
import Topbar from './topbar.jsx';

const Page = React.createClass({
	render() {
		return(
		<div>
			<Topbar userName={this.props.userName} title={this.props.title} onLogout={this.props.onLogout}/>
			<div id="wrapper">
				<div id="ajax-loading" className="la-anim-10"></div>
				<Sidebar list={this.props.sidebarList}/>
				<div id="current-page" style={{"width":"85%","top": 40, "bottom": 0, "position": "absolute", "marginLeft": "15%", "overflowX": "scroll", "overflowY": "scroll"}}>
					{this.props.children}
				</div>
			</div>
		</div>)
	}
})

export default Page;