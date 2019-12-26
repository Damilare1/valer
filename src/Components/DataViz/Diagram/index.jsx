import d3 from 'd3';

var node = document.createElement('div');

var data = [{x: 0, y: 0},
            {x: 20, y: 20}, 
            {x: 40, y: 60}, 
            {x: 60, y: 80}, 
            {x: 70, y: 70}, 
            {x: 100, y: 80}, 
            {x: 120, y: 80}, 
            {x: 150, y: 150}, 
            {x: 180, y: 80}, 
            {x: 200, y: 80}, 
            {x: 220, y: 80}, 
            {x: 300, y: 100}, 
            {x: 450, y: 20}, 
            {x: 600, y: 130}, 
            {x: 700, y: 180}, 
            {x: 800, y: 100}]

// create svg element:
var svg = d3.select(node).append("svg").attr("width", 800).attr("height", 200)

var y = d3.scale.linear().domain([0,200]).range([200, 0]);
var x = d3.scale.linear().domain([0,800]).range([0, 800]);

var defs = svg.append("defs");

var gradient = defs.append("linearGradient")
   .attr("id", "svgGradient")
   .attr("x1", "0%")
   .attr("x2", "100%")
   .attr("y1", "0%")
   .attr("y2", "100%");

gradient.append("stop")
   .attr('class', 'start')
   .attr("offset", "0%")
   .attr("stop-color", "rgba(2, 148, 255)")
   .attr("stop-opacity", 1);

   gradient.append("stop")
   .attr('class', 'start')
   .attr("offset", "20%")
   .attr("stop-color", "rgba(2, 148, 255)")
   .attr("stop-opacity", 0.4);

gradient.append("stop")
   .attr('class', 'mid')
   .attr("offset", "50%")
   .attr("stop-color", "rgba(2, 148, 255)")
   .attr("stop-opacity", 0.4);

gradient.append("stop")
   .attr('class', 'mid')
   .attr("offset", "70%")
   .attr("stop-color", "rgba(2, 148, 255)")
   .attr("stop-opacity", 0.4);

gradient.append("stop")
   .attr('class', 'end')
   .attr("offset", "100%")
   .attr("stop-color", "rgba(2, 148, 255, 1)")
   .attr("stop-opacity", 0.1);

// prepare a helper function
var curveFunc = d3.svg.area().x(function(d) { return x(d.x) })      // Position of both line breaks on the X axis    // Y position of top line breaks
.y1(function(d) { return y(d.y) })  
.y0(200) 

// Add the path using this helper function
svg.append('path')
  .attr('d', curveFunc(data))
  .attr('stroke', '#1875F0')
  .attr('fill', 'url(#svgGradient)')
  .style("stroke-width", 0.5);

export default node;