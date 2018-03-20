

var data = JSON.parse('[{"USA":335, "RUSSIA": 122, "CHINESE": 11, "INTERNATIONAL":79, "COMMERCIAL" : 7, "IN ORBIT": 4 }]');


var moneyyears  = [
    [25636,10],
    [35256,12],
    [38376,13],
    [41496,14],
    [59124,16],
    [69732,18],
    [89960,20],
    [84396,22]
    ]



var createplot = function(){
    var container = d3.select("svg");
    var circles = container.selectAll("circle").data(moneyyears).enter().append("circle");
    circles.attr("cy",function(d){
	return 900-Math.floor(d[0]/100);
    });
    circles.attr("cx",function(d){
	return d[1]*30;
    });
    circles.attr('r',10);
}



createplot();
	
	      
	    
	
	
    
	
	
	
	
	
