

var data = JSON.parse('[{"USA":335, "RUSSIA": 122, "CHINESE": 11, "INTERNATIONAL":79, "COMMERCIAL" : 7, "IN ORBIT": 4 }]');


var countries = ["USA","RUSSIA","CHINA","INTERNATIONAL","COMMERCIAL","IN ORBIT"];
var people = [335,122,11,79,7,4];


var createplot = function(){
    var container = d3.select("svg");
    var circles = container.selectAll("circle").data(people).enter().append("circle");
    circles.attr("cx",function(d){
	if(d == 335){
	    return 100 + "";
	}
	if (d== 122){
	    return 200+"";
	}
	if(d==11){
	    return 300+"";
	}
	if(d==79){
	    return 400+"";
	}
	if(d==7){
	    return 500+"";
	}
	else{
	    return 600+"";
	}
    });
    circles.attr("cy",function(d){
	return 500 - d;
    });
    circles.attr('r',10);
    
}

var button = document.getElementById("button");
button.addEventListener("click",createplot);
	
	      
	    
	
	
    
	
	
	
	
	
