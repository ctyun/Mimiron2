
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
	},
	harmoniousDivision(sum, cnt){
		let resp = [];
		let tempSum = 0;
		let aver = Number((sum/cnt).toFixed(2));
		while(cnt--){
			resp.push(cnt?aver:Number((sum-tempSum).toFixed(2)));
			tempSum += aver
		}
		return resp;
	},
	ts2str(ts){
		if(ts){
			let dt = new Date();
			dt.setTime(ts*1000);
			return dt.toLocaleString();
		}
	},
	formatMoney(number, places, symbol, thousand, decimal) {
        places = !isNaN(places = Math.abs(places)) ? places : 2;
        symbol = symbol !== undefined ? symbol : "￥";
        thousand = thousand || ",";
        decimal = decimal || ".";
        number = Number(number);
        let negative = number < 0 ? "-" : "",
            i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
    },
    uuid() {
		let s = [];
		let hexDigits = "0123456789abcdef";
		for (let i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
		}
		s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
		s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
		s[8] = s[13] = s[18] = s[23] = "-";

		let uuid = s.join("");
		return uuid;
	}
}

export default Misc