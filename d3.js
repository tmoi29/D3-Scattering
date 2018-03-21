//Team
//Tiffany Moi and Leo Liu
//SoftDev2 pd7
//K12 -- Medallions ...of Data!
//2018-03-020



var pic = document.getElementById("vimage");

var pop = [213302031, 236542199, 258709873, 291421906];
var year = [1970, 1980, 1990, 2000];

var plot = function(){
    var i = 0;
    for (i=0; i < pop.length; i ++){
        var c = document.createElementNS(
        "http://www.w3.org/2000/svg", "circle");
        c.setAttribute("cx", (year[i] - 1900) * 3);
        c.setAttribute("cy", parseInt(pic.getAttribute("height")) - pop[i] * 5/10000000);
        c.setAttribute("r", 5);
        c.setAttribute("fill", "red");
        c.setAttribute("stroke", "black");
        pic.appendChild(c);
    }
};

plot();