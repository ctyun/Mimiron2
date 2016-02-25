

let Loader={
    openUrl(url) {
        if(url[0]!="#"){
            url = "#"+url;
        }
        var result = window.open(url);
        if(!result){
            alert("请在浏览器设置允许弹出窗口");
        }
    },
	loadUrl(url) { //根据url进行加载资源
		window.location.hash = url;
		if(!window.mimiron2.RouteConfig){
			console.info(`请先定义window.mimiron2.RouteConfig`);
			return
		}
		let RouteConfig = window.mimiron2.RouteConfig;
        for(let i in RouteConfig){
            if(RouteConfig[i].test(url)){
                this.loadJSX(i);
                return 
            }
        }
        console.info(`url ${url} 没有注册.`);
	},
	loadJSX(path) { //根据路径加载jsx文件
        if(!window.mimironUse || typeof(window.mimironUse.runScripts)=="undefined"){
          console.info(`如需异步加载jsx文件, 请使用Mimiron2自带的browser.js文件, 或者将babel下此文件的runScripts方法暴露到window.mimironUse下`);
          return;
        }
        // 这里需要约束所有jsx页面全部渲染到DOM id= page-wrapper
        $("#page-wrapper").html('<div class="ant-spin ant-spin-lg ant-spin-spining page-loading"><span class="ant-spin-dot ant-spin-dot-first"></span><span class="ant-spin-dot ant-spin-dot-second"></span><span class="ant-spin-dot ant-spin-dot-third"></span></div>'); //加载动画效果
        let scripts = document.getElementsByTagName('script')
        //先删除其他无用的jsx, 在同步加载多个jsx时, 可能有些jsx还没加载完.
        for (let i = 0; i < scripts.length; i++) {
          if (/^text\/babel(;|$)/.test(scripts.item(i).type)&&scripts.item(i).src.indexOf("?only")!=-1) {
            document.body.removeChild(scripts.item(i));
          }
        }
        let script = document.createElement("script");
        script.type = "text/babel";
        script.src = path+"?only";
        document.body.appendChild(script);
        mimironUse.runScripts();
        document.body.removeChild(script); //mimironUse.runScripts();运行之后即可直接删除jsx标签, 否则加载base.jsx之后加载其他jsx文件会导致重复加载
	}
}


export default Loader