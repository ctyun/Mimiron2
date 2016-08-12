

let Loader={
    openUrl(url) {
        if(url.search("http")===0){
        }
        else if(url[0]!="#"){
            url = "#"+url;
        }
        var result = window.open(url);
        if(!result){
            alert("请在浏览器设置允许弹出窗口");
        }
    },
	loadUrl(url) { //根据url进行加载资源
        mimironUse = window.mimironUse || {};
        mimironUse.history = mimironUse.history || [];
        mimironUse.history.push(url);

		window.location.hash = url;
        if(url[0] == "#"){ //某些版本的IE window.location.hash返回#
            url = url.substring(1, url.length);
        }
		if(!window.mimiron2.RouteConfig){
			console.info(`请先定义window.mimiron2.RouteConfig`);
			return
		}
		let RouteConfig = window.mimiron2.RouteConfig;
        for(let i in RouteConfig){
            if(RouteConfig[i].test(url)){
                if(i.indexOf("|") != -1){
                    for(let j of i.split("|")){
                        console.log(j.indexOf("?"));
                        if(j.indexOf("?")!=-1){
                            const get_str = s=>s.slice(s.indexOf("?"));
                            console.log(get_str(j), get_str(url));
                            j = j.replace(get_str(j), get_str(url));
                        }
                        this.loadJSX(j);
                    }                  
                } else {
                    if(i.indexOf("?")!=-1){
                        const get_str = s=>s.slice(s.indexOf("?"));
                        console.log(get_str(i), get_str(url));
                        i = i.replace(get_str(i), get_str(url));
                    }
                    this.loadJSX(i);
                }
                return 
            }
        }
        for(let i in RouteConfig){ //如果不重复一次, 有时候会找不到, 原因尚不明确.
            if(RouteConfig[i].test(url)){
                if(i.indexOf("|")){
                    for(let j of i.split("|")){
                        if(j.indexOf("?")!=-1){
                            const get_str = s=>s.slice(s.indexOf("?"));
                            j = j.replace(get_str(j), get_str(url));
                        }
                        this.loadJSX(j);
                    }   
                } else {
                    if(i.indexOf("?")!=-1){
                        const get_str = s=>s.slice(s.indexOf("?"));
                        console.log(get_str(i), get_str(url));
                        i = i.replace(get_str(i), get_str(url));
                    }
                    this.loadJSX(i);
                }
                return 
            }
        }
        alert(`无权限访问 ${url} .`);
        console.info(`url ${url} 没有注册.`);
	},
	loadJSX(path) { //根据路径加载jsx文件
        //如果已经进行了转义, 直接加载js文件. 目前此方法有些buggy
        if(window.mimiron2.compiled){
            path = path.replace(".jsx",".js");
            // 这里需要约束所有jsx页面全部渲染到DOM id= page-wrapper
            $("#page-wrapper").html('<div class="la-anim-10 la-animate"></div>'); //加载动画效果
            let scripts = document.getElementsByTagName('script')
            //先删除其他无用的jsx, 在同步加载多个jsx时, 可能有些jsx还没加载完.
            for (let i = 0; i < scripts.length; i++) {
              if (/^text\/javascript(;|$)/.test(scripts.item(i).type)&&scripts.item(i).src.indexOf("?only")!=-1) {
                document.body.removeChild(scripts.item(i));
              }
            }
            let script = document.createElement("script");
            script.type = "text/javascript";
            script.src = path+"?only";
            if(mimironUse.copy){  //document.body.appendChild(script); 将会清空mimiron2, 原因不详.
                window.mimiron2 = $.extend({},mimironUse.copy);
            } else{
                mimironUse.copy = $.extend({},mimiron2);
            }
            document.body.appendChild(script);
            document.body.removeChild(script); //mimironUse.runScripts();运行之后即可直接删除jsx标签, 否则加载base.jsx之后加载其他jsx文件会导致重复加载    
            return;
        }
        //检查jsx转义器
        if(!window.mimironUse || typeof(window.mimironUse.runScripts)=="undefined"){
          console.info(`如需异步加载jsx文件, 请使用Mimiron2自带的browser.js文件, 或者将babel下此文件的runScripts方法暴露到window.mimironUse下`);
          return;
        }
        // 这里需要约束所有jsx页面全部渲染到DOM id= page-wrapper
        $("#page-wrapper").html('<div class="la-anim-10 la-animate"></div>'); //加载动画效果
        let scripts = document.getElementsByTagName('script');
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
	},
    goBack(step){
        step = step || 1;
        step ++ ;
        let url = null;
        while(step--)
            url = mimironUse.history.pop();
        window.location.hash = url;
        this.loadUrl(url);
    }
}


export default Loader