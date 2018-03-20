

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
    var y = container.append("text");
    y.text("Money earned (in hundreds)").attr("x", 15).attr("y", 600).attr("transform", "rotate(270 15,600)");
    var x = container.append("text");
    x.text("years in education").attr("x", 400).attr("y", 885);
    circles.attr("cy",function(d){
	   return 900-Math.floor(d[0]/120);
    });
    circles.attr("cx",function(d){
	   return d[1]*30;
    });
    circles.attr('r',10);
}



createplot();
	
	      
	    
	
	
    
	
	
	
	
	
