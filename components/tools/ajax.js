import message from "../basic/message";

let Ajax = {
	get: function(url, func) {
		//开始css效果
		this.showLoading();
		jQuery.ajax({
			url:url,
			method:"GET",
			contentType:"application/json",
			success: data => {
				try{
					data = data.parseJSON();
				} catch(err) {}
				// 取消css效果
				--mimironUse.ajaxLoadingStack==0?$("#ajax-loading")? $("#ajax-loading").removeClass("la-animate"): null:null;
				if(data["info"] && data["autoWrap"])
					data = data.autoWrap;
				func(data);
			},
			error: this.onError,
			complete: () => {}, //注意, 不能在complete中调用取消css的方法,因为func(data)可能报错.
		})
	},
	post: function(url, params, func) {
		this.showLoading();
		jQuery.ajax({
			url:url,
			method:"POST",
				data: JSON.stringify(params),
				contentType:"application/json",
				success: data => {
				try{
					data = data.parseJSON();
				} catch(err) {}
		  		// 取消css效果
				--mimironUse.ajaxLoadingStack==0?$("#ajax-loading")? $("#ajax-loading").removeClass("la-animate"): null:null;
				if(data["info"] && data["autoWrap"])
					data = data.autoWrap;
				func(data);
			},
			error: this.onError,
			complete: () => {},
		})
	},
	form(url, params){
		let form=$("<form>");
		form.attr("style","display:none");
		form.attr("target","");
		form.attr("method","post");
		form.attr("action",url);
		$("body").append(form);
		let input1=$("<input>");
		input1.attr("type","hidden");
		input1.attr("name","params");
		input1.attr("value",JSON.stringify(params));
		form.append(input1);
		form.submit();
		form.remove();
	},
	showLoading : function(){
		mimironUse.ajaxLoadingStack = mimironUse.ajaxLoadingStack || 0;
		mimironUse.ajaxLoadingStack++;
		$("#ajax-loading")? $("#ajax-loading").addClass("la-animate"): null;
	},
	onError: function(obj, msg, e) {
		// 取消css效果
		--mimironUse.ajaxLoadingStack==0?$("#ajax-loading")? $("#ajax-loading").removeClass("la-animate"): null:null;
		message.error(`请求出错:${e}`, 3);
	},
}

export default Ajax