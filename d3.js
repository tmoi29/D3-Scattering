//Team XDDD
//Tiffany Moi and Leo Liu
//SoftDev2 pd7
//K13 -- Scattered
//2018-03-22



var pic = document.getElementById("vimage");

var pop = [ 123202624, 142164569, 161325798, 189323175, 213302031, 236542199, 258709873, 291421906];
var year = [ 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000];

var plot = function(){
    generateAxis();
    var i = 0;
    for (i=0; i < pop.length; i ++){
        var c = document.createElementNS(
        "http://www.w3.org/2000/svg", "circle");
        c.setAttribute("cx", (year[i] - 1900) * 3);
        c.setAttribute("cy", parseInt(pic.getAttribute("height")) - pop[i] * 5/10000000 - 75);
        c.setAttribute("r", 5);
        c.setAttribute("fill", "red");
        c.setAttribute("stroke", "black");
        pic.appendChild(c);
    }
};

var generateAxis = function(){
    var xaxis = document.createElementNS(
	"http://www.w3.org/2000/svg", "line");
    var yaxis = document.createElementNS(
	"http://www.w3.org/2000/svg", "line");
    xaxis.setAttribute( "x1", 50);
    xaxis.setAttribute( "y1", 450);
    xaxis.setAttribute( "x2", 450);
    xaxis.setAttribute( "y2", 450);
    xaxis.setAttribute( "stroke", "black");
    yaxis.setAttribute( "x1", 50);
    yaxis.setAttribute( "y1", 50);
    yaxis.setAttribute( "x2", 50);
    yaxis.setAttribute( "y2", 450);
    yaxis.setAttribute( "stroke", "black");
    pic.appendChild(xaxis);
    pic.appendChild(yaxis);

    var xAxisLabel = document.createElementNS(
        "http://www.w3.org/2000/svg", "text");
    var yAxisLabel = document.createElementNS(
        "http://www.w3.org/2000/svg", "text");
    xAxisLabel.setAttribute( "x", 455);
    xAxisLabel.setAttribute( "y", 450);
    xAxisLabel.innerHTML = "Year"
    yAxisLabel.setAttribute( "x", 45);
    yAxisLabel.setAttribute( "y", 45);
    yAxisLabel.innerHTML = "Population (in millions)";
    pic.appendChild(xAxisLabel);
    pic.appendChild(yAxisLabel);
    generateAxisLabel();
};

var generateAxisLabel = function(){
    var i;
    for (i=0; i < pop.length; i++){ //x-axis label generation
	var xLabel = document.createElementNS(
            "http://www.w3.org/2000/svg", "text");
	xLabel.setAttribute("x" , (year[i] - 1900) * 3 - 10);
	if ( i % 2 == 0){ //stagger the year labels
	    xLabel.setAttribute("y" , 485);
	} else {
	    xLabel.setAttribute("y" , 465);
	}
	xLabel.innerHTML = year[i];
	pic.appendChild(xLabel);

	var yLabel = document.createElementNS(
            "http://www.w3.org/2000/svg", "text");
	yLabel.setAttribute("x", 5);
	yLabel.setAttribute("y", parseInt(pic.getAttribute("height")) - pop[i] * 5/10000000 - 75);
	yLabel.innerHTML = Math.floor(pop[i]/1000000);
	pic.appendChild(yLabel);
    }

    for (i=0; i < 10; i++){
	
    }
}


plot();
