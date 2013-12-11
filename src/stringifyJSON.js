// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	if (typeof(obj) === "string"){
		return "\"" + (obj) + "\"";
	} else if (typeof(obj) === "number"){
		return "" + obj + "";
	} else {
		return stringifyJSONhelper(obj);
	}
};

var stringifyJSONhelper = function(obj){
	if (Array.isArray(obj)){
		if (obj.length === 0){
			return "[]";
		} else {
			var helperString = "";
			for (var i = 0; i < obj.length; i ++){
				if (i === 0){
					helperString = "[" + stringifyJSONhelper(obj[i]);
				} else {
					helperString = helperString + "," + stringifyJSONhelper(obj[i]);
				}
			}
		}
		var helperString = helperString + "]";
		return helperString;
	} else if (typeof(obj) === "string"){
		return "\"" + obj + "\"";
	} else if (typeof(obj) === "number"){
		return obj;
	} else if (typeof(obj) === "boolean"){
		return obj.toString();
	}
};
