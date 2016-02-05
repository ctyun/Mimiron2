

let Loader={
	loadUrl(url) { //根据url进行加载资源
		console.log(url);
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
	},
	loadJSX(path) { //根据路径加载jsx文件
		//先删除其他无用的jsx
    if(typeof(window.mimironUse.runScripts)=="undefined"){
      console.info(`如需异步加载jsx文件, 请使用Mimiron2自带的browser.js文件, 或者将babel下此文件的runScripts方法暴露到window.mimironUse下`);
    }
    $("#current-page").html('<div class="ant-spin ant-spin-lg ant-spin-spining page-loading"><span class="ant-spin-dot ant-spin-dot-first"></span><span class="ant-spin-dot ant-spin-dot-second"></span><span class="ant-spin-dot ant-spin-dot-third"></span></div>'); //加载动画效果
    let scripts = document.getElementsByTagName('script')
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
    
	}
}


export default Loader