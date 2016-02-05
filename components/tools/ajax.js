

let Ajax = {
	get: function(url, func) {
		//开始css效果
		this.showLoading();
		jQuery.ajax({
			url:url,
			method:"GET",
			success: data => {
				func(data);
			},
			error: this.onError,
			complete: this.onComplete,
		})
	},
	post: function(url, params, func) {
		this.showLoading();
		jQuery.ajax({
			url:url,
			method:"POST",
        	data: JSON.stringify(params),
        	success: data => {
				func(data);
			},
			error: this.onError,
			complete: this.onComplete,
		})
	},
	showLoading : function(){
		mimironUse.ajaxLoadingStack = mimironUse.ajaxLoadingStack || 0;
		mimironUse.ajaxLoadingStack++;
		$("#ajax-loading")? $("#ajax-loading").addClass("la-animate"): null;
	},
	onError: function(obj, msg, e) {
		console.log(obj, msg, e);
	},
	onComplete: function() {
		// 取消css效果
		--mimironUse.loadingStack==0?$("#ajax-loading")? $("#ajax-loading").removeClass("la-animate"): null:null;
	}
}

export default Ajax