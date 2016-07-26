
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
	padZero(num, n) {  
	    let len = num.toString().length;  
	    while(len < n) {  
	        num = "0" + num;  
	        len++;  
	    }  
	    return num;  
	},
	ts2str(ts){
		if(ts){
			let dt = new Date();
			dt.setTime(ts*1000);
			return dt.toLocaleString();
		}
	},
	date2str(d, format){
		d = d || new Date();
		format = format || "YYYY-MM-DD";
		let year = d.getFullYear();
		let month = this.padZero(d.getMonth() + 1,2);
		let day = this.padZero(d.getDate(),2);
		return format.replace("YYYY",year).replace("yyyy",year).replace("%Y",year).replace("MM",month).replace("mm",month).replace("%m",month).replace("DD", day).replace("dd",day).replace("%D",day)
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
	},
	getUrlParam(index){
		if(index === undefined){
			index = -1;
		}
		let hash = window.location.hash.split("/");
		return hash[hash.length + Number(index)];
	},
	formatXML(xml){
		let formatted = '';
		let reg = /(>)[^<](<)(\/*)/g;
		xml = xml.replace(reg, '$1\r\n$2$3');
		let pad = 0;
		xml.split('\r\n').forEach((node,index)=>{
			let indent = 0;
			if (node.match( /.+<\/\w[^>]*>$/ )) {
	            indent = 0;
	        } else if (node.match( /^<\/\w/ )) {
	            if (pad != 0) {
	                pad -= 1;
	            }
	        } else if (node.match( /^<\w[^>]*[^\/]>.*$/ )) {
	            indent = 1;
	        } else {
	            indent = 0;
	        }
	        let padding = '';
	        for (let i = 0; i < pad; i++) {
	            padding += '  ';
	        }
	        formatted += padding + node + '\r\n';
	        pad += indent;
		});
		return formatted;
	}
}

export default Misc