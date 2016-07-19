const Loader = mimiron2.Loader;
const Ajax = mimiron2.Ajax;

window.mimiron2.RouteConfig = {
  "./debug/base-demo.jsx":/\/basedemo$/ig,
  "./debug/bss-demo.jsx":/\/bssdemo$/ig,
  "./debug/redux-demo.jsx":/\/reduxdemo/ig
};

if(window.location.pathname == "/login" || window.location.hash == '#/login'){
	window.location.hash = "#/login";
	//根据URL加载不同业务页面
	Loader.loadUrl("#/login");
}else{
	//加载BSS页面基本框架
	Loader.loadJSX("./debug/init.jsx");
	//根据URL加载不同业务页面
	Loader.loadUrl(window.location.hash);
}
