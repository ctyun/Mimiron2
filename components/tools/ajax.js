

let Ajax = {
	get: function(url, func) {
		//开始css效果
		this.showLoading();
		jQuery.ajax({
			url:url,
			method:"GET",
			contentType:"application/json",
			dataType: 'json',
			success: data => {
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
        	dataType: 'json',
        	success: data => {
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
	showLoading : function(){
		mimironUse.ajaxLoadingStack = mimironUse.ajaxLoadingStack || 0;
		mimironUse.ajaxLoadingStack++;
		$("#ajax-loading")? $("#ajax-loading").addClass("la-animate"): null;
	},
	onError: function(obj, msg, e) {
		// 取消css效果
		--mimironUse.ajaxLoadingStack==0?$("#ajax-loading")? $("#ajax-loading").removeClass("la-animate"): null:null;
	},
}

export default Ajax