

var data = JSON.parse('[{"USA":335, "RUSSIA": 122, "CHINESE": 11, "INTERNATIONAL":79, "COMMERCIAL" : 7, "IN ORBIT": 4 }]')

var sorted = {}
var sort = function(){
    var obj = data[0];
    console.log(obj);
    for (var key in obj){
	
	var country = key;
	if (!(country in sorted)){
	    sorted[country] = 1;
	}
	else {
	    sorted[country] = sorted[country] +1;
	}
    }
}

console.log(sorted)
	
	
	
	
	
