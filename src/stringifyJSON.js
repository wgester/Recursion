// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	if (Array.isArray(obj)){
		if (obj.length === 0){
			return "[]";
		} else {
			var helperString = "";
			for (var i = 0; i < obj.length; i ++){
				if (i === 0){
					helperString = "[" + stringifyJSON(obj[i]);
				} else {
					helperString = helperString + "," + stringifyJSON(obj[i]);
				}
			}
		}
		var helperString = helperString + "]";
		return helperString;
	} else if (obj === null){
		return "null";
	} else if (typeof(obj) === "string"){
		return "\"" + obj + "\"";
	} else if (typeof(obj) === "number" || typeof(obj) === "boolean"){
		return obj.toString();
	} else if (obj.toString() === "[object Object]"){
		if (Object.keys(obj).length === 0){
			return "{}";
		} else {
			var helperString = "";
			for (var i in obj){
				if (i === undefined || obj[i] === undefined || typeof(i) === "function" || typeof(obj[i]) ==="function") {
					return "{}";
				} else if (Object.keys(obj)[0] === i){
					helperString = "{" + stringifyJSON(i) + ":" + stringifyJSON(obj[i]);
				} else {
					helperString = helperString + "," + stringifyJSON(i) + ":" + stringifyJSON(obj[i]);
				}
			}
		}
		var helperString = helperString + "}";
		return helperString;
	} 
};
