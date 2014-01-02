// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var hotBod = document.body
  return getHelper(hotBod, className);
};

var getHelper = function(hotBodPre, className){
    var hotBodKids = [];
	if (hotBodPre.childNodes !== [] && hotBodPre.childNodes){
		var hotBod = hotBodPre.childNodes;
	    for (var i = 0; i < hotBod.length; i ++){
	  	  if (hotBod[i].classList && hotBod[i]){
	  		  for (var j = 0; j < hotBod[i].classList.length; j ++){
	  			  if (hotBod[i].classList[j] === className){
	  				  hotBodKids.push(hotBod[i]);
	  			  }
	  		  }
	  	  }
		  var babyBod = getHelper(hotBod[i], className);
		  if (Array.isArray(babyBod) && babyBod !== []){
			  for (var k = 0; k < babyBod.length; k ++){
				  if (babyBod[k]){
					  hotBodKids.push(babyBod[k]);
				  }
			  }
		  }
	    }
	}
    return hotBodKids;
};
