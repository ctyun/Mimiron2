
let Misc={
	$_GET() {
	    let url = window.document.location.href.toString();
	    let u = url.split("?");
	    if(typeof(u[1]) == "string"){
	        u = u[1].split("&");
	        let get = {};
	        for(let i in u){
	            let j = u[i].split("=");
	            get[j[0]] = j[1];
	        }
	        return get;
	    } else { 
	        return {};
	    }
	},
	clone(obj){
		if (typeof (obj) != 'object' | obj === null)
			return obj;
		let re = {};
		if (obj.constructor==Array)
			re = [];
		for ( let i in obj) {
			re[i] = Misc.clone(obj[i]);
		}
		return re;
	},
	tempVar(k,v){
		window.mimironUse.tempVar = window.mimironUse.tempVar || {};
		if(typeof v =="undefined"){
			return window.mimironUse.tempVar[k]
		}else{
			window.mimironUse.tempVar[k] = v;
		}
		return
	},
	inList(item, list){
		let flag = false;
		for(let ins of list){
			if(item == ins){
				flag = true;
				break;
			}
		}
		return flag;
	}
}

export default Misc